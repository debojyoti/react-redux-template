import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.userName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUsername } = counterSlice.actions;

export default counterSlice.reducer;
