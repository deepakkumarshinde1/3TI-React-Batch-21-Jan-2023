import { combineReducers } from "@reduxjs/toolkit";
import UserReducerSlice from "./UserReducerSlice";
const reducer = combineReducers({ user: UserReducerSlice.reducer });

export default reducer;
