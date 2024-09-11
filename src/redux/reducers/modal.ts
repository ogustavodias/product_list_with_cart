import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "cart",
  initialState: { openned: false },
  reducers: {
    open(state) {
      state.openned = true;
    },
    close(state) {
      state.openned = false;
    },
  },
});

export const { open, close } = modalSlice.actions;

export default modalSlice.reducer;
