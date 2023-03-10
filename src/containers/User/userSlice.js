import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    credentials: {},
    token: "",
   active:false
  },
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        ...action.payload,
        loggedIn: true
      };
    },
    userout: (state, action) => {
      return {
        ...state,
        ...action.payload
      };
    }
  }
});

export const { login, userout } = userSlice.actions;



export const userData = (state) => state.user;

export default userSlice.reducer;
