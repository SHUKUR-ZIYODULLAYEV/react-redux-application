import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistance-storage";

const initialState = {
    isLoading: false,
    loggedIn: false,
    user: null,
    erroe: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //Login
    signUserStart: (state) => {
      state.isLoading = true;
    },
    signUserSuccess: (state, action) => {
      state.loggedIn = true;
      state.isLoading = false;
      state.user = action.payload;
      setItem("token", action.payload.token); 
    },
    signUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(action.payload);
      
    },
    logout: (state) => {
      state.user = null;
      state.loggedIn = false;
      state.isLoading = false;
    },
  },
});

export const { signUserStart, signUserSuccess, signUserFailure, logout } = authSlice.actions;
export default authSlice.reducer;