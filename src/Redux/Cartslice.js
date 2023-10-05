"use client";
import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add(state, actions) {
      return [...state, actions.payload];
    },
    remove(state, actions) {
      return state.filter((item) => item.id !== actions.payload);
    },
    incrementQuantity(state, actions) {
      // const { id } = actions.payload;
      // const item = state.find((item) => item.id === id);
      // if (item) {
      //   item.length += 1;
      // }
    },

    // decrementQuantity(state, actions) {
    //   const { id } = actions.payload;
    //   const item = state.find((item) => item.id === id);
    //   if (item && item.quantity > 1) {
    //     item.length -= 1;
    //   }
    // },
  },
});

export const { add, remove, incrementQuantity, decrementQuantity } =
  cardSlice.actions;
export default cardSlice.reducer;
