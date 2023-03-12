import { useUserContext } from "./context/UserContext";

const App = () => {
  let { userList, userInput, getUserValue } = useUserContext();
  return (
    <>
      <center>
        <input ref={userInput} type="text" placeholder="Enter User Name" />
        <button onClick={getUserValue}>Search</button>
        <hr />
        <ul className="list-group col-4">
          <li className="list-group-item">
            Users
            <span className="ms-2 badge bg-primary rounded-pill">
              {userList.length}
            </span>
          </li>
          {userList.map((userName, index) => {
            return (
              <li key={index} className="list-group-item">
                {userName}
              </li>
            );
          })}
        </ul>
      </center>
    </>
  );
};

export default App;
