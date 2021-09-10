import { createSlice } from "@reduxjs/toolkit";

const initalGameState = {
  top: 18,
  left: 12,
  start: false,
  direction: "f",
};

const gameSlice = createSlice({
  name: "game",
  initialState: initalGameState,
  reducers: {
    up(state, action) {
      if (state.top > 21 || (state.top > 5 && state.left >= 72))
        state.top = state.top - 6;
      state.direction = "b";
    },
    down(state, action) {
      if (state.top < 157) state.top = state.top + 6;
      state.direction = "f";
    },
    left(state, action) {
      if (state.left > 78 || (state.top >= 12 && state.left > 5))
        state.left = state.left - 6;
      state.direction = "l";
    },
    right(state, action) {
      if (state.left < 262) state.left = state.left + 6;
      state.direction = "r";
    },
    start(state, action) {
      state.start = !state.start;
    },
    reset(state, action) {
      state.top = 18;
      state.left = 12;
      state.direction = "f";
    },
  },
});
export const gameActions = gameSlice.actions;

export default gameSlice;
