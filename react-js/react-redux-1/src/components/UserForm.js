import { useDispatch, useSelector } from "react-redux";
import { saveUser, updateInput } from "../redux/UserReducerSlice";

let UserForm = () => {
  //useSelector => get states
  let { fName, lName } = useSelector((state) => state.user.form);
  let { userList } = useSelector((state) => state.user);

  let dispatch = useDispatch();
  let saveUserData = (event) => {
    // avoid default form submission
    event.preventDefault();
    dispatch(saveUser());
  };

  let inputChange = (event) => {
    let { value, name } = event.target;
    dispatch(updateInput({ name, value }));
  };

  return (
    <>
      <form onSubmit={saveUserData}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            value={fName}
            name="fName"
            onChange={inputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Last Name"
            onChange={inputChange}
            value={lName}
            name="lName"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>

      <hr />
      <h1>User {userList.length}</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>First</th>
            <th>Last</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => {
            return (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.fName}</td>
                <td>{user.lName}</td>
                <td>-</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default UserForm;
