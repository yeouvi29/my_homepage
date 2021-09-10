import { createSlice } from "@reduxjs/toolkit";

const initalGameState = {
  top: 0,
  left: 0,
  start: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState: initalGameState,
  reducers: {
    up(state, action) {
      if (state.top > 2) state.top = state.top - 3;
    },
    down(state, action) {
      if (state.top < 160) state.top = state.top + 3;
    },
    left(state, action) {
      if (state.left > 2) state.left = state.left - 3;
    },
    right(state, action) {
      if (state.left < 265) state.left = state.left + 3;
    },
    start(state, action) {
      state.start = !state.start;
    },
  },
});
export const gameActions = gameSlice.actions;

export default gameSlice;
