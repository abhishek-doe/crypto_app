import { createSlice } from "@reduxjs/toolkit";

  let user = {}

export const userSlice = createSlice({
  name: "userSlice",
  initialState: { user, isAuth: false },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logout: (state, action) => {
      state.value = action.payload;
      state.isAuth = false;
    }
    
  },
});

export const { login, setUser, logout } = userSlice.actions;

export default userSlice.reducer;
