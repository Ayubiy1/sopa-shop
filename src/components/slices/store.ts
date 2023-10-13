import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../api";
// import { data, DataTypes, ListsTypes } from "../data";

export interface ListsTypes {
  id: number;
  title: string;
  isActive: boolean;
}

export interface CounterState {
  data: any;
}

const initialState: CounterState = {
  data: [],
};

const counterSlice = createSlice({
  name: "sopa",
  initialState,
  reducers: {
    setRegister: (state, action) => {},
  },
});

export const { setRegister } = counterSlice.actions;
export default counterSlice.reducer;
