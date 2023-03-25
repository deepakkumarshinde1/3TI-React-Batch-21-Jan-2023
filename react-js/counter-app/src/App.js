import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import PageNotFound from "./components/PageNotFound";
import UserList from "./components/UserList";
import UserRegistration from "./components/UserRegistration";

const App = () => {
  return (
    <>
      <center className="pt-3">
        <NavBar />
        <Routes>
          <Route path="/" element={<UserRegistration />} />
          <Route path="/user" element={<UserList />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </center>
    </>
  );
};

export default App;
