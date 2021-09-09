import { configureStore } from "@reduxjs/toolkit";

import countSlice from "./count-slice";

const store = configureStore({
  reducer: { count: countSlice.reducer },
});

export default store;
