export let updateInput = (value) => {
  return {
    type: "INPUT_CHANGE",
    payload: value,
  };
};

export let saveUser = () => {
  return {
    type: "SAVE_USER",
    payload: null,
  };
};
