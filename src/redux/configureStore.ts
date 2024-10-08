import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../services/api";
import cart from "./reducers/cart";
import modal from "./reducers/modal";

const store = configureStore({
  reducer: {
    cart,
    modal,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
