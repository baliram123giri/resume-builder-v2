import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
  name: "userinfo",
  initialState: {
    user: [],
  },
  reducers: {
    userLoginAction: (state, action) => {
      state.user = action.payload
    },
    autoLogout: (state) => {
      state = {};
    },
  },
});

export const { autoLogout, userLoginAction } = authReducer.actions;

export default authReducer.reducer;
