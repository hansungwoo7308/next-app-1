import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: ["tom"],
  },
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload]; // 스프레드 오퍼레이터에 의한 샐로카피와 오버라이드...
      // state.users = action.payload;
    },
  },
  // 비동기함수를 처리하기위한 리듀서
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     // HYDRATE : __NEXT_REDUX_WRAPPER_HYDRATE__
  //     // TODO - client side state override
  //     // 클라이언트에 상태를 동기화하기 위한...
  //     state.users = action.payload;
  //   },
  // },
});

export const { add } = usersSlice.actions;

export default usersSlice.reducer;
