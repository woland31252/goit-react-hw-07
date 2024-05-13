import { createSlice } from "@reduxjs/toolkit";

const filtersInitState = { name: ""};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitState,
  reducers: {
      findContactFilter: (state, action) => {
        state.name = action.payload;
    },
  },
});

export const { findContactFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
