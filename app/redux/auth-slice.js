import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
    },
    changeAuhtentication: (state, action) => {
      state.isLoggedIn = true;
    },
  },
});
export const { changeAuhtentication, logout } = authSlice.actions;
export default authSlice.reducer;
