import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { message, notification } from "antd";
import { RootState } from ".";
import client from '../clients/apolloClient';
import { ROUTES, SCHEDULED_PAYMENTS } from "../graphql/queries";
import { payments_schedule, payments_scheduleVariables, payments_schedule_paymentSchedulesWhere } from "../graphql/queries/__generated__/payments_schedule";
import { LoanForm } from "../components/Loan/CreateLoan";

export interface INewLoanListState {
    loans: LoanForm[];
    saving: boolean;
}

const initialState:INewLoanListState = {
    loans: [],
    saving: false,
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

export const newLoanListSlice = createSlice({
    name: "newLoanListSlice",
    initialState,
    reducers: {
        reset: () => initialState,
        grantLoan: (state, payload: PayloadAction<LoanForm>) => {
            state.loans = [...state.loans, payload.payload];
        },
        removeLoan: (state, payload: PayloadAction<LoanForm> ) => {
            
        },
        updateLoan: (state, payload: PayloadAction<LoanForm> ) => {
            
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchScheduledPaymentList.pending, (state, action) => {
/*             state.loadingPayments = true;
 */        });
        builder.addCase(fetchScheduledPaymentList.fulfilled, (state, action) => {
            //Group by borrower
           
        });
        
    },
});

export const { reset, grantLoan } = newLoanListSlice.actions;

export const selectnewLoanList = (state: RootState) => state.newLoanListSlice;

export default newLoanListSlice.reducer;