import {PayloadAction, createSlice} from '@reduxjs/toolkit';

// store -> root reducer(state) -> user slice, order slice
// state.user.email ...
// state.order
// state.ui.loading ...

// action : state를 변경하는 동작
// dispatch : action을 실제로 실행하는 함수
// reducer : action이 실제로 실행되면 state를 바꾸는 로직

const initialState = {
  name: '',
  email: '',
  accessToken: '',
  money: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  // 동기 action
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.accessToken = action.payload.accessToken;
      // state.refreshToken = action.payload.refreshToken;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setMoney(state, action: PayloadAction<number>) {
      state.money = action.payload;
    },
  },
  // 비동기 action
  extraReducers: builder => {},
});

export default userSlice;
