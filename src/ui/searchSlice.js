import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: ""
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    inputUpdate(state, action) {
      state.query = action.payload;
    },
  },
});

export const {inputUpdate} = searchSlice.actions
export default searchSlice.reducer
