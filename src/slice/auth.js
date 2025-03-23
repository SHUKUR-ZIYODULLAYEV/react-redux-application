import { createSlice } from "@reduxjs/toolkit";

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
      console.log(action.payload);
      
    },
    signUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(action.payload);
      
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { signUserStart, signUserSuccess, signUserFailure, logout } = authSlice.actions;
export default authSlice.reducer;