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
      return [...state, actions.payload];
    },
    decrementQuantity(state, actions) {
      const index = state.indexOf(actions.payload);
      if (index !== -1) {
        // สร้างรายการใหม่โดยลบ actions.payload ออกจากรายการเดิม
        const newState = [...state.slice(0, index), ...state.slice(index + 1)];
        return newState;
      }
      // หากไม่พบ actions.payload ในรายการให้คืนค่ารายการเดิม
      return state;
    }
  },
});

export const { add, remove, incrementQuantity, decrementQuantity } =
  cardSlice.actions;
export default cardSlice.reducer;
