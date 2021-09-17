import { configureStore } from "@reduxjs/toolkit";

import colorSlice from "./color-slice";
import countSlice from "./count-slice";
import gameSlice from "./game-slice";
import projectSlice from "./project-slice";

const store = configureStore({
  reducer: {
    count: countSlice.reducer,
    move: gameSlice.reducer,
    color: colorSlice.reducer,
    project: projectSlice.reducer,
  },
});

export default store;
