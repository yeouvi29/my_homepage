import { createSlice } from "@reduxjs/toolkit";

const initalColorState = {
  creative: [
    "c",
    "r",
    "e",
    "a",
    "t",
    "i",
    "v",
    "e",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ],
  color: [],
};

const colorSlice = createSlice({
  name: "color",
  initialState: initalColorState,
  reducers: {
    changeColor(state, action) {
      state.color.push(action.payload);
      if (state.color.length > state.creative.length) state.color.shift();
    },
  },
});

export const colorAction = colorSlice.actions;

export default colorSlice;
