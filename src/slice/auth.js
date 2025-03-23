import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    loggedIn: false,
    user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //Login
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserSuccess: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload;
    },
    loginUserFailure: (state) => {
      state.isLoading = false;
    },
    //Registr
    registrUserStart: (state) => {
      state.isLoading = true;
    },
    registrUserSuccess: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload;
    },
    registrUserFailure: (state) => {
      state.isLoading = false;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { loginUserStart, loginUserSuccess, loginUserFailure, registrUserStart, registrUserSuccess, registrUserFailure, logout } = authSlice.actions;
export default authSlice.reducer;