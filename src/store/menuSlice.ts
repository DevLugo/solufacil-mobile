import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";
import { RootState } from ".";
import client from '../clients/apolloClient';
import { ROUTES } from "../graphql/queries";
import { GetRoutes, GetRoutesVariables, GetRoutes_getRoutes } from "../graphql/queries/__generated__/GetRoutes";

export interface IMenuState {
    loading: boolean;
    visible: boolean;
}

const initialState:IMenuState = {
    visible: false,
    loading: false,
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        reset: () => initialState,
        setVisibility: (state, payload: PayloadAction<boolean>) => {
            state.visible = payload.payload;
        }

    },
});

export const { reset, setVisibility } = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menuSlice;

export default menuSlice.reducer;