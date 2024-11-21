import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("entries");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn(e);
    return [];
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("entries", serializedState);
  } catch (e) {
    console.warn(e);
  }
};

const entriesSlice = createSlice({
  name: "entries",
  initialState: loadFromLocalStorage(),
  reducers: {
    addEntry: (state, action) => {
      state.push(action.payload);
      saveToLocalStorage(state);
    },
    removeEntry: (state, action) => {
      const newState = state.filter((entry) => entry.id !== action.payload);
      saveToLocalStorage(newState);
      return newState;
    },
  },
});

export const { addEntry, removeEntry } = entriesSlice.actions;
export default entriesSlice.reducer;
