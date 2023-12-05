import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";

//! this is store for the app
export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});
