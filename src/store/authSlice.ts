import { createAsyncThunk, createSlice, Dispatch } from "@reduxjs/toolkit";
import { message } from "antd";
import { RootState } from ".";
import client from '../clients/apolloClient';
import { SIGN_IN } from "../graphql/mutations";
import { signIn, signInVariables, signIn_signIn, signIn_signIn_user } from "../graphql/mutations/__generated__/signIn";
import { resetToken, setToken } from "../utils";

export interface IAuthState {
    token?: string;
    user: signIn_signIn_user | undefined;
    error: string;
    loading: boolean;
}

const initialState:IAuthState = {
    user: undefined,
    error: "",
    loading: false,
};

export const signInWithCredentials = createAsyncThunk(
    "auth/signIn",
    async (variables: signInVariables): Promise<signIn_signIn> => {
        const { data } = await client.mutate<signIn, signInVariables>({
            mutation: SIGN_IN,
            variables,
        });
        return data?.signIn!;
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(signInWithCredentials.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(signInWithCredentials.fulfilled, (state, action) => {
            const { token, user } = action.payload;
            state.user = user;
            state.token = token;
            state.loading = false;
            setToken(String(state.token));
        });
        builder.addCase(signInWithCredentials.rejected, (state, action) => {
            state.loading = false;
            message.error(action.error.message);
        });
    },
});

export const { reset } = authSlice.actions;

export const logoutUser = () => async (dispatch: Dispatch) => {
    resetToken();
    dispatch({ type: "RESET_ALL" });
};

export const selectMe = (state: RootState) => state.authSlice;

export default authSlice.reducer;