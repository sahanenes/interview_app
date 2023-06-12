import { configureStore } from "@reduxjs/toolkit";
import marvelReducer from "../features/marvelSlice";

export const store = configureStore({
  reducer: { marvel: marvelReducer },
});
export default store;
