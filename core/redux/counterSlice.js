import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // Async Reducers...
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     state.count += 1;
  //     // HYDRATE : __NEXT_REDUX_WRAPPER_HYDRATE__
  //     // TODO - client side state override
  //   },
  // },
});
// console.log(
//   "counterSlice.getInitialState() : ",
//   counterSlice.getInitialState()
// );

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
