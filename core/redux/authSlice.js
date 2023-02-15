// signup, signin, signout

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; // studying...
// createAsyncThunk() : return thunk action creator that will run the promise callback and dispatch actions

import authServices from "../../src/services/auth.service";
import { setMessage } from "./messageSlice";

let user;
// if (typeof window !== "undefined") {
//   // server 에서 로컬스토리지의 값을 가져오고 싶지만...
//   // client 에서는 아직 브라우저(window object)가 존재하지 않는 상태다.
//   // So, window is not undefined...
//   user = JSON.parse(localStorage.getItem("user"));
//   //   console.log("user : ", user);
// }

export const register = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }, thunkAPI) => {
    try {
      const response = await authServices.register(username, email, password);
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
// string action type value: 이 값에 따라 pending, fulfilled, rejected가 붙은 액션 타입이 생성된다.
// payloadCreator callback: 비동기 로직의 결과를 포함하고 있는 프로미스를 반환하는 비동기 함수

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await authServices.login(username, password);
      thunkAPI.dispatch(setMessage(response.data.message));
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await authServices.logout();
});

const initialState = user
  ? {
      isLoggedIn: true,
      user,
    }
  : {
      isLoggedIn: false,
      user,
    };

// integrating
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    // asynchronous works
    // computed property?
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export default authSlice.reducer;
