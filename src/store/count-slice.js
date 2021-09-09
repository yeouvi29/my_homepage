import { createSlice } from "@reduxjs/toolkit";

const initalCountState = {
  count: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState: initalCountState,
  reducers: {
    addCount(state, action) {
      state.count = action.payload;
    },
  },
});

export const countAction = countSlice.actions;

export default countSlice;
