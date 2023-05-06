import authSlice from "./auth-slice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
  auth: authSlice,
});

const store = configureStore({
  reducer,
});
export default store;
