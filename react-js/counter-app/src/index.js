import React from "react"; // node_modules
import ReactDOM from "react-dom/client"; // node_modules
import "./index.css"; // custom module
import App from "./App"; //custom module (component)
import { UserContextProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("react"));
root.render(
  <React.Fragment>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.Fragment>
);
// ReactDOM ==> V DOM

// App.js ==> component

// <App /> ==> component call

// React.StrictMode (dev) => small warning , unwanted code , basic hints
// <> </> => JSX Fragment => basic hints
// React.Fragment => basic hints
