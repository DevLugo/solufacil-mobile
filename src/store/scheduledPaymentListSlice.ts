import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { message, notification } from "antd";
import { RootState } from ".";
import client from '../clients/apolloClient';
import { ROUTES, SCHEDULED_PAYMENTS } from "../graphql/queries";
import { payments_schedule, payments_scheduleVariables, payments_schedule_paymentSchedulesWhere } from "../graphql/queries/__generated__/payments_schedule";

export interface IPaymentsListState {
    payments: (payments_schedule_paymentSchedulesWhere & { amountForCurrentPayment:number, checked:boolean  })[];
    loadingPayments: boolean;
}

const initialState:IPaymentsListState = {
    payments: [],
    loadingPayments: false,
};

export const fetchScheduledPaymentList = createAsyncThunk(
    "fetch/scheduledPayment/list",
    async (variables: payments_scheduleVariables): Promise<payments_schedule_paymentSchedulesWhere[]> =>  {
        const { data } = await client.query<payments_schedule, payments_scheduleVariables>({
            query: SCHEDULED_PAYMENTS,
            variables,
        });
        return data?.paymentSchedulesWhere;
    }
);

type SetcheckedPayload = {idx:number};
type SetAmountForcurrentPaymentPayload = {paymentId:string, amount:number};

export const scheduledPaymentListSlice = createSlice({
    name: "scheduledPaymentList",
    initialState,
    reducers: {
        reset: () => initialState,
        setAmountForCurrentPayment: (state, payload: PayloadAction<SetAmountForcurrentPaymentPayload>) => {
            const itemsCopy = [...state.payments];
            const idx = itemsCopy.findIndex(i => i.id === payload.payload.paymentId);
            itemsCopy[idx].amountForCurrentPayment = payload.payload.amount; 
            state.payments = [...itemsCopy];
        },
        setChecked: (state, payload: PayloadAction<SetcheckedPayload> ) => {
            const itemsCopy = [...state.payments];
            itemsCopy[payload.payload.idx].checked = !itemsCopy[payload.payload.idx].checked; 
            state.payments = [...itemsCopy];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchScheduledPaymentList.pending, (state, action) => {
            state.loadingPayments = true;
        });
        builder.addCase(fetchScheduledPaymentList.fulfilled, (state, action) => {
            //Group by borrower
            const results:(payments_schedule_paymentSchedulesWhere  & { amountForCurrentPayment:number, checked:boolean })[] = [] 
            const totalsById:{[key:string]:number} = {};
            action.payload.forEach(payment => {
                if(payment.borrower){
                    if(payment.borrower!.id in totalsById){
                        totalsById[payment.borrower.id] += payment.pendingAmount; 
                    }else{
                        totalsById[payment.borrower.id] = payment.pendingAmount; 
                    }
                }
            })

            action.payload.forEach(payment => {
                const payments = action.payload.filter(p => p.borrower?.id === payment.borrower?.id);
                if(payments[0].borrower && payments[0].borrower?.id in totalsById){
                    results.push(
                        {...payments[0], pendingAmount:totalsById[payments[0].borrower?.id], amountForCurrentPayment: totalsById[payments[0].borrower?.id], checked:true }
                    )
                    delete totalsById[payments[0].borrower?.id];
                }
            })

            state.payments = results;
            state.loadingPayments = false;
        });
        builder.addCase(fetchScheduledPaymentList.rejected, (state, action) => {
            state.loadingPayments = false;
            notification.error({message: action.error.message});
        });
    },
});

export const { reset, setChecked, setAmountForCurrentPayment } = scheduledPaymentListSlice.actions;

export const selectScheduledPaymentList = (state: RootState) => state.scheduledPaymentListSlice;

export default scheduledPaymentListSlice.reducer;