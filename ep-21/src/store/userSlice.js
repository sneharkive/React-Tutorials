import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },

    clearName: (state) => {
      state.name = "";
    },
    
  },
});


export const { setName, clearName } = userSlice.actions;
export default userSlice.reducer;
