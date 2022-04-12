import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: true };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toogle(state) {
      state.show = !state.show;
    },
  },
});

export default uiSlice;
