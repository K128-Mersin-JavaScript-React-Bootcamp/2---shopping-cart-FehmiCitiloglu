import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart.js";

import authSlice from "./auth-slice.js";
import productSlice from "./products";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    prod: productSlice.reducer,
  },
});

export default store;
