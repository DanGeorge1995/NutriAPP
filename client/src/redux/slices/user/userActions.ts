import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";
import requests from "../../../axios/requests";

interface RegisterUser {
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk(
  // action type string
  "user/register",
  // callback function
  async ({ email, password }: RegisterUser, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // make request to backend
      const res = await axios.post(requests.registerUser, { email, password }, config);
      return res.data.user;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        // return custom error message from API if any
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// In the code block above, we've taken the values from the register form and made a POST request to the register route using Axios. In the event of an error, thunkAPI.rejectWithValue sends the custom error message from the backend as a payload to the reducer. You may notice that the register API is called without referencing the server's base URL. This is possible with the proxy configuration existing in frontend/package.json.
