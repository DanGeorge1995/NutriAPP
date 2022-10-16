import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./userActions";

interface UserState {
  loading: boolean;
  userInfo: null;
  error: null;
  success: false; // for monitoring the registration process.
}

const initialState: UserState = {
  loading: false,
  userInfo: null, // for user object
  error: null,
  success: false, // for monitoring the registration process.
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    // register user
    // @ts-ignore
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    // @ts-ignore
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
      state.userInfo = payload;
    },
    // @ts-ignore
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
