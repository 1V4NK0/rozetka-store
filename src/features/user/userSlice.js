import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
  error: "",
  name: "john",
  username: "",
  address: "",
};

const FAKE_USER = {
  name: "Ivan",
  username: "ivanko@ukr.net",
  password: "abobaOnline",
  address: "Vulitsya Heroyiv UNR 34, Kyiv",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      const { username, password } = action.payload;
      if (username === FAKE_USER.username && password === FAKE_USER.password) {
        state.user = FAKE_USER;
        state.isLoggedIn = true;
        state.error = "";
        state.username = FAKE_USER.username
        state.address = FAKE_USER.address
        state.name = FAKE_USER.name;
        console.log("logged in");
      } else {
        state.error = "Wrong credentials";
        alert("Wrong credentials");
      }
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      state.error = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
