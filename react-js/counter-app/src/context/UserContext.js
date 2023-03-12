import { createContext, useContext, useRef, useState } from "react";

// create context
let UserContext = createContext({});

// get provider
export const UserContextProvider = (props) => {
  let { children } = props;
  let userInput = useRef();
  let [userList, setUserList] = useState([]);

  console.log(userList);
  let getUserValue = () => {
    let input = userInput.current;
    // add data in array => array.push()
    userList.push(input.value);
    setUserList([...userList]);
    userInput.current.value = "";
  };

  let value = {
    userInput,
    getUserValue,
    userList,
  };
  // provider component
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// use context
export const useUserContext = () => {
  return useContext(UserContext);
};
