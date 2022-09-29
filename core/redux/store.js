import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import counter from "./counterSlice";
import users from "./usersSlice";
import authReducer from "./authSlice";
import messageReducer from "./messageSlice";

// 리듀서 탑승!
const combineReducer = combineReducers({
  counter,
  users,
  auth: authReducer,
  message: messageReducer,
});

// 서버와 클라이언트의 스토어를 동기화하기 위한 액션을 핸들링...
const mainReducer = (state, action) => {
  // 서버 스토어와 클라이언트 스토어가 같도록 동기화하기 위해서... 핸들링...
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      counter: {
        count: state.counter.count + action.payload.counter.count,
      },
      users: {
        users: [...action.payload.users.users, ...state.users.users],
      },
    };
    return nextState;
  } else {
    return combineReducer(state, action);
  }
};

// 서버와 클라이언트에 실행될 콜백펑션?...
const makeStore = () => {
  return configureStore({
    reducer: {
      //   main: mainReducer,
      counter: counter,
      users: users,
    },
    devTools: true,
  });
};

// 리덕스 스토어를 만들기 위한 makeStore callback function 을 넘겨주고...
export const wrapper = createWrapper(makeStore);
// export const wrapper = createWrapper(makeStore, { debug: true }); // 터미널에서 디버깅
