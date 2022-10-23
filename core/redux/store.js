import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import counterReducer from "./counterSlice";
import usersReducer from "./usersSlice";

const combineReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

const mainReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      counter: {
        value: state.counter.value + action.payload.counter.value,
      },
      users: {
        users: [...action.payload.users.value, ...state.users.value],
      },
    };
    return nextState;
  } else {
    return combineReducer(state, action);
  }
};

const makeStore = () => {
  return configureStore({
    reducer: {
      main: mainReducer,
    },
    // devTools: true,
    devTools: false,
  });
};

// 리덕스 스토어를 만들기 위한 makeStore callback function 을 넘겨주고...
// export const wrapper = createWrapper(makeStore);
export const wrapper = createWrapper(makeStore, { debug: false }); // 터미널에서 디버깅
