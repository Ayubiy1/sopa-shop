import { createSlice } from "@reduxjs/toolkit";

export interface ListsTypes {
  id: number;
  title: string;
  isActive: boolean;
}

export interface CounterState {
  data: any;
  loadingg: boolean;
  collapsed: boolean;
}

const initialState: CounterState = {
  data: [],
  loadingg: false,
  collapsed: false,
};

const counterSlice = createSlice({
  name: "sopa",
  initialState,
  reducers: {
    setLoadingTrue: (state, actions) => {
      state.loadingg = actions.payload;
    },
    setLoadingFalse: (state, actions) => {
      state.loadingg = true;
    },

    setCollapsed: (state, actions) => {
      state.collapsed = actions.payload;
    },
  },
});

export const { setLoadingTrue, setLoadingFalse, setCollapsed } =
  counterSlice.actions;
export default counterSlice.reducer;
