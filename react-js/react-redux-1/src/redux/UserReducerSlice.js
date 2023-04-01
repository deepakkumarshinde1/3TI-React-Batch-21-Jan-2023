import { createSlice } from "@reduxjs/toolkit";
let resetForm = {
  fName: "",
  lName: "",
};
let UserReducerSlice = createSlice({
  name: "user",
  initialState: {
    form: {
      fName: "",
      lName: "",
    },
    userList: [],
  },
  reducers: {
    updateInput: (state, action) => {
      let { name, value } = action.payload;
      return { ...state, form: { ...state.form, [name]: value } };
    },
    saveUser: (state) => {
      let newUser = { ...state.form };
      return {
        ...state,
        userList: [...state.userList, newUser],
        form: { ...resetForm },
      };
    },
  },
});

export default UserReducerSlice;
export const { updateInput, saveUser } = UserReducerSlice.actions;
