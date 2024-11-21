import { createSlice } from "@reduxjs/toolkit";

const entriesSlice = createSlice({
  name: "entries",
  initialState: [],
  reducers: {
    addEntry: (state, action) => {
      state.push(action.payload);
    },
    removeEntry: (state, action) => {
      return state.filter((entry) => entry.id !== action.payload);
    },
  },
});

export const { addEntry, removeEntry } = entriesSlice.actions;
export default entriesSlice.reducer;