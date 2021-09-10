import { configureStore } from "@reduxjs/toolkit";

import countSlice from "./count-slice";
import gameSlice from "./game-slice";

const store = configureStore({
  reducer: { count: countSlice.reducer, move: gameSlice.reducer },
});

export default store;
