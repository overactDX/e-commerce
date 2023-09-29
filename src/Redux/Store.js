import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./Cartslice";

const store = configureStore({
    reducer: {
        cart: cardReducer,
    }
})

export default store;
