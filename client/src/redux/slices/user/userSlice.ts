import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../../actions/user/registerAction";

interface UserState {
  loading: boolean;
  userInfo: null;
  email: string;
  password: string;
  confirmPassword: string;
  error: null;
  success: false; // for monitoring the registration process.
}

const initialState: UserState = {
  loading: false,
  userInfo: null, // for user object
  email: "",
  password: "",
  confirmPassword: "",
  error: null,
  success: false, // for monitoring the registration process.
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail(state, { payload }) {
      state.email = payload;
    },
    setPassword(state, { payload }) {
      state.password = payload;
    },
    setConfirmPassword(state, { payload }) {
      state.confirmPassword = payload;
    },
  },
  extraReducers: {
    // register user
    // @ts-ignore
    [registerUser.pending]: (state) => {
      console.log(state);
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
export const { setEmail, setPassword, setConfirmPassword } = userSlice.actions;

export default userSlice.reducer;
