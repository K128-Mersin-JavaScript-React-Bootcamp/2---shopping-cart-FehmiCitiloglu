import { createSlice } from "@reduxjs/toolkit";

// const checkLocalStorage = createAsyncThunk(
//   "users/fetchByIdStatus",
//   async (userId, thunkAPI) => {
//     const response = await userAPI.fetchById(userId);
//     return response.data;
//   }
// );
const authSlice = createSlice({
  name: "authenticated",
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      // localStorage.setItem("loggedIn", "1");
    },
    logout(state) {
      state.isAuthenticated = false;
      // localStorage.removeItem("loggedIn");
    },
  },
});
export const authActions = authSlice.actions;

export default authSlice;
