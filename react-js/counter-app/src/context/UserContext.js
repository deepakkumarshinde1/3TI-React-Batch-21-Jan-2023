import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// create context
let UserContext = createContext({});

// get provider
export const UserContextProvider = (props) => {
  let navigate = useNavigate();
  let { children } = props;
  let [editIndex, setEditIndex] = useState(-1);
  let [disabled, setDisabled] = useState(true);
  let [user, setUser] = useState({
    fName: "",
    lName: "",
  });

  useEffect(() => {
    if (user.fName.length >= 1 && user.lName.length >= 1) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [user]);

  let [userList, setUserList] = useState([]);

  let saveUser = () => {
    if (editIndex === -1) {
      setUserList([...userList, { ...user }]);
    } else {
      userList[editIndex] = { ...user };
      setUserList([...userList]);
      setEditIndex(-1);
    }
    setUser({
      fName: "",
      lName: "",
    });
    navigate("/user"); // single page logic

    // window.location.assign('/user')
  };

  let inputChange = (event) => {
    let { name, value } = event.target;
    let _newUser = { ...user };
    _newUser[name] = value;
    setUser(_newUser);
  };
  let removeUser = (index) => {
    userList.splice(index, 1); // delete data (index_pos,deleteCounter)
    setUserList([...userList]);

    // userList.slice ==> cut array
    // pop
    // shift
    // splice
  };
  let edit = (index) => {
    let editStudent = { ...userList[index] };
    setUser(editStudent);
    setEditIndex(index);
    navigate("/");
  };
  let value = {
    saveUser,
    userList,
    inputChange,
    user,
    disabled,
    removeUser,
    edit,
    editIndex,
  };
  // provider component
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// use context
export const useUserContext = () => {
  return useContext(UserContext);
};
