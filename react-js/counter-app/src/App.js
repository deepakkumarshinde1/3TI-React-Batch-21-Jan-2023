import { useUserContext } from "./context/UserContext";

const App = () => {
  let {
    editIndex,
    edit,
    disabled,
    user,
    userList,
    inputChange,
    saveUser,
    removeUser,
  } = useUserContext();
  return (
    <>
      <center className="pt-3">
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
        <hr />
        <ul className="list-group col-4">
          <li className="list-group-item">
            Users
            {userList.length > 0 ? (
              <span className="ms-2 badge bg-primary rounded-pill">
                {userList.length}
              </span>
            ) : null}
          </li>
          {userList.map((user, index) => {
            return (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between  pointer"
              >
                <span>
                  {user.fName} {user.lName}
                </span>
                <div>
                  {editIndex === -1 ? (
                    <i
                      className="fa fa-trash text-danger mx-1"
                      onClick={() => removeUser(index)}
                      style={{ cursor: "pointer" }}
                    ></i>
                  ) : null}

                  <i
                    className="fa fa-edit text-primary mx-1"
                    onClick={() => edit(index)}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              </li>
            );
          })}
        </ul>
      </center>
    </>
  );
};

export default App;
