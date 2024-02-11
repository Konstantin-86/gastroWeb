import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Express Fit",
};

export const ProgrammModeSlice = createSlice({
  name: "curNameProg",
  initialState,
  reducers: {
    changeCurNameProg: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { changeCurNameProg } = ProgrammModeSlice.actions;

export default ProgrammModeSlice.reducer;
