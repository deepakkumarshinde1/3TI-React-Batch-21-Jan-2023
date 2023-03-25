import { useUserContext } from "../context/UserContext";

let UserList = () => {
  let { editIndex, edit, userList, removeUser } = useUserContext();
  return (
    <>
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
    </>
  );
};

export default UserList;
