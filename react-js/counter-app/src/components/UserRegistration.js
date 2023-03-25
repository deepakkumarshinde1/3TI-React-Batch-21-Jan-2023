import { useUserContext } from "../context/UserContext";

let UserRegistration = () => {
  let { editIndex, disabled, user, inputChange, saveUser } = useUserContext();
  return (
    <>
      <input
        type="text"
        name="fName"
        placeholder="Enter 1st Name"
        onChange={inputChange}
        value={user.fName}
      />
      <input
        type="text"
        name="lName"
        placeholder="Enter Last Name"
        onChange={inputChange}
        value={user.lName}
      />
      <button
        disabled={disabled}
        onClick={saveUser}
        className={
          disabled ? "btn btn-danger btn-sm" : "btn btn-success btn-sm"
        }
      >
        {editIndex === -1 ? "Save" : "Update"}
      </button>
    </>
  );
};

export default UserRegistration;
