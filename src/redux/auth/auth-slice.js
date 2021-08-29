import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./auth-operations";

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
      state.user = payload.data.user;
      state.token = payload.data.token;
      state.isLoaggedIn = true
      
    }, 

    // [register.fulfilled]: (state, { payload }) => [
    //   ...state,
    //   payload.user,
    //   payload.token,
    //   (state.isLoaggedIn = true),
    // ],

    // [login.fulfilled]: (state, { payload }) => [
    //   ...state,
    //   payload.user,
    //   payload.token,
    //   (state.isLoaggedIn = true),
    // ],
  },
});

export default authSlice.reducer;
