import { configureStore } from "@reduxjs/toolkit";
import entriesReducer from './entriesSlice'

export const store = configureStore({
  reducer: {
    entries: entriesReducer,
  },
});
