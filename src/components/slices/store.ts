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
  search: string | number;
}

const initialState: CounterState = {
  data: [],
  loadingg: false,
  collapsed: false,
  search: "",
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

    setSearch: (state, actions) => {
      state.search = actions.payload;
    },
  },
});

export const { setLoadingTrue, setLoadingFalse, setCollapsed, setSearch } =
  counterSlice.actions;
export default counterSlice.reducer;
