import { createSlice } from "@reduxjs/toolkit";

const initialProjectState = {
  name: "",
  languages: "",
  projectDetail: "",
  isEntered: false,
};

const projectSlice = createSlice({
  name: "project",
  initialState: initialProjectState,
  reducers: {
    changeEnteringState(state) {
      state.isEntered = true;
    },
    displayInfo(state, action) {
      state.name = action.payload.name;
      state.languages = action.payload.language;
      state.projectDetail = action.payload.detail;
    },
  },
});

export const projectActions = projectSlice.actions;

export default projectSlice;
