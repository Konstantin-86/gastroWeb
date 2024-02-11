import { configureStore } from "@reduxjs/toolkit";
import lunguageReducer from "./lunguageSlice.js";
import dayReducer from "./daySlice.js";
import curNameProgReducer from "./ProgrammModeSlice.js";

export const store = configureStore({
  reducer: {
    lunguage: lunguageReducer,
    day: dayReducer,
    curNameProg: curNameProgReducer,
  },
});
