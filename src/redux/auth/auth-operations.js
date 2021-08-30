import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log("error");
  }
});

const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    console.log(data);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log("error");
  }
});

const logOut = createAsyncThunk("auth/logOut", async () => {
  try {
    await axios.post("/users/logOut");
    token.unset();
  } catch (error) {}
});

const fetchCurrUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistToken = state.auth.token;

  if (persistToken === null) {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistToken);
  try {
    const { data } = await axios.get("/users/current");
    return data;
  } catch (error) {}
});

// eslint-disable-next-line import/no-anonymous-default-export
export { register, login, logOut, fetchCurrUser };
