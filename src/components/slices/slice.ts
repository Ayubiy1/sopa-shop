import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./store";
import { type } from "os";

const store = configureStore({
  reducer: counterSlice, // Reducerlar jamlanmasi
});

export default store;

export type RooteState = ReturnType<typeof store.getState>;
export type AppDispach = typeof store.dispatch;
