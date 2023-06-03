import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { RootState } from ".";
import client from '../clients/apolloClient';
import { ROUTES } from "../graphql/queries";
import { GetRoutes, GetRoutesVariables, GetRoutes_getRoutes } from "../graphql/queries/__generated__/GetRoutes";

export interface IRoutesState {
    routes: GetRoutes_getRoutes[];
    error: string;
    loading: boolean;
}

const initialState:IRoutesState = {
    routes: [],
    error: "",
    loading: false,
};

export const getRoutesRQ = createAsyncThunk(
    "routes/getRoutesRQ",
    async (variables: GetRoutesVariables): Promise<GetRoutes_getRoutes[]> => {
        const { data } = await client.query<GetRoutes, GetRoutesVariables>({
            query: ROUTES,
            variables,
        });
        return data?.getRoutes;
    }
);

export const routeSlice = createSlice({
    name: "route",
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(getRoutesRQ.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getRoutesRQ.fulfilled, (state, action) => {
            state.loading = false;
            state.routes = action.payload
        });
        builder.addCase(getRoutesRQ.rejected, (state, action) => {
            state.loading = false;
            message.error(action.error.message);
        });
    },
});

export const { reset } = routeSlice.actions;

export const selectRoutes = (state: RootState) => state.routeSlice;

export default routeSlice.reducer;