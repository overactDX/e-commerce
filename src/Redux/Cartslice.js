"use client";
import {createSlice} from "@reduxjs/toolkit"

const cardSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        add(state, actions) {
            state.push(actions.payload)
        },
        remove(state, actions) {
            return state.filter((item) => item.id !== actions.payload);
        }
    }
})


export const {add ,remove} = cardSlice.actions;
export default cardSlice.reducer;