import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/redux/productslice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
