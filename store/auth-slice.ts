// import { createReducer } from "@reduxjs/toolkit";

// import { isAuthenticated, getTokenData } from "../services/auth";
import { AuthState } from "../types/auth";

// // const initialState = { isAuthenticated: isAuthenticated() };

const initialState: AuthState = { isAuthenticated: false };

// const reducer = createReducer(initialState, {});

// export default reducer;

// export const selectAuthState = (rootState: any) => rootState.auth;

import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("login from slice called", action.payload);
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectAuthState = (rootState: any) => rootState.auth;

export default authSlice.reducer;
