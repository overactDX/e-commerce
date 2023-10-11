"use client";
import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addInformation(state, actions) {
      return [...state, actions.payload];
    },
    remove(state, actions) {
      return state.filter((item) => item.id !== actions.payload);
    },
    incrementQuantity(state, actions) {
      return [...state, actions.payload];
    },
    decrementQuantity(state, actions) {
      const index = state.indexOf(actions.payload);
      return [...state.slice(0, index)];
    },
  },
});

export const { addInformation, remove, incrementQuantity, decrementQuantity } =
  cardSlice.actions;
export default cardSlice.reducer;
