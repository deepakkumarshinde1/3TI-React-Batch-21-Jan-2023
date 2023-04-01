let initialState = {
  form: {
    fName: "",
    lName: "",
  },
  userList: [],
};
let resetForm = {
  fName: "",
  lName: "",
};
export const userReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "INPUT_CHANGE":
      // form input update
      let { name, value } = payload;
      let _state = { ...state, form: { ...state.form, [name]: value } };
      return _state;

    case "SAVE_USER":
      let newUser = { ...state.form };
      return {
        ...state,
        userList: [...state.userList, newUser],
        form: { ...resetForm },
      };
    default:
      return state;
  }
};
