import { createSlice } from "@reduxjs/toolkit";
import FinanceService from "../../services/FinanceService";



export const slice = createSlice({
    name: "finance",
    initialState: {
        data: []
    },
    reducers: {
    getSymbols: (state, action) => {
        state.data = action.payload;
    }
    }
});

export const getSymbolsAsync = () => async (dispatch: any) => {
    try {
        const FinanceServe = new FinanceService();
        const response = await FinanceServe.getData();
        dispatch(getSymbols(response.data));
    } catch (err) {
        // @ts-ignore
        throw new Error(err);
    }
};
export const { getSymbols } = slice.actions;
export const actions = slice.actions;
export const reducer = slice.reducer;
