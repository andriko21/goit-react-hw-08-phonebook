import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrUser, login, logOut, register } from "./auth-operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoaggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoaggedIn = true;
    },
    [login.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoaggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoaggedIn = null;
    },
    [fetchCurrUser.fulfilled](state, { payload }) {
      state.user =  payload ;
      state.isLoaggedIn = true;
    },
  },
});

export default authSlice.reducer;
