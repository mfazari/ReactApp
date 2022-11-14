import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");
const API_URL = "https://jsonplaceholder.typicode.com/todos";


export const slice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
        data: [0]
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    getTodo: (state, action) => {
        // @ts-ignore
        state.data = [action.payload];
    }
    }
});

export const getTodoAsync = (data: any) => async (dispatch: any) => {
    try {
        const response = await axios.get(`https://query2.finance.yahoo.com/v1/finance/search?q=apple`);
        dispatch(getTodo(response.data));
    } catch (err) {
        // @ts-ignore
        throw new Error(err);
    }
};
export const { getTodo } = slice.actions;
export const showTodo = (state: any) => state.todo.data;
export const actions = slice.actions;
export const reducer = slice.reducer;
