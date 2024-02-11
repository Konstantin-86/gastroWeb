import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const daySlice = createSlice({
  name: "day",
  initialState,
  reducers: {
    changeCurrentDay: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { changeCurrentDay } = daySlice.actions;

export default daySlice.reducer;
