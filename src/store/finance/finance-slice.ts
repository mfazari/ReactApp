import { createSlice } from "@reduxjs/toolkit";
import FinanceService from "../../services/FinanceService";


export const slice = createSlice({
    name: "finance",
    initialState: {
        searchSymbolResult: [],
        chartDataResult: [],
        newsDataResult: []
    },
    reducers: {
    getSymbols: (state, action) => {
        state.searchSymbolResult = action.payload;
    },
    getChartDataBySymbol: (state, action) => {
        state.chartDataResult = action.payload;
    },
    getNewsBySymbol: (state, action) => {
        state.newsDataResult = action.payload;
    }
    }
});

export const getSymbolsAsync = (searchName: string) => async (dispatch: any) => {
    try {
        const FinanceServe = new FinanceService();
        const response = await FinanceServe.getSymbolsByName(searchName);
        dispatch(getSymbols(response.data));
    } catch (err) {
        // @ts-ignore
        throw new Error(err);
    }
};

export const getChartDataBySymbolAsync = (searchName: string) => async (dispatch: any) => {
    try {
        console.log(searchName);
        const FinanceServe = new FinanceService();
        const response = await FinanceServe.getChartDataBySymbol(searchName);
        dispatch(getChartDataBySymbol(response.data));
    } catch (err) {
        // @ts-ignore
        throw new Error(err);
    }
};

export const getNewsDataBySymbolAsync = (searchName: string) => async (dispatch: any) => {
    try {
        const FinanceServe = new FinanceService();
        const response = await FinanceServe.getNewsBySymbol(searchName);
        dispatch(getNewsBySymbol(response.data));
    } catch (err) {
        // @ts-ignore
        throw new Error(err);
    }
};

export const { getSymbols, getChartDataBySymbol, getNewsBySymbol } = slice.actions;
export const actions = slice.actions;
export const reducer = slice.reducer;
