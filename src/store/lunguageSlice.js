import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Russia",
};

export const lunguageSlice = createSlice({
  name: "lunguage",
  initialState,
  reducers: {
    changeNameLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { increment, decrement, changeNameLanguage } =
  lunguageSlice.actions;

export default lunguageSlice.reducer;
