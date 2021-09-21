import { createSlice } from "@reduxjs/toolkit";

const initialProjectState = {
  name: "",
  languages: "",
  projectDetail: "",
  isEntered: false,
  isMounted: false,
};

const projectSlice = createSlice({
  name: "project",
  initialState: initialProjectState,
  reducers: {
    changeEnteringState(state) {
      state.isEntered = !state.isEntered;
    },
    displayInfo(state, action) {
      state.name = action.payload.name;
      state.languages = action.payload.language;
      state.projectDetail = action.payload.detail;
    },
    setMount(state) {
      state.isMounted = true;
    },
  },
});

export const projectActions = projectSlice.actions;

export default projectSlice;
