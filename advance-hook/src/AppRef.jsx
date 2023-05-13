import { useRef } from "react";
import Input from "./components/Input";

function App() {
  let userRef = useRef();
  let passwordRef = useRef();
  let saveRecord = (event) => {
    event.preventDefault();
    console.log(userRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col-8 card p-4 mt-4 mx-auto">
            <form onSubmit={saveRecord}>
              <Input
                ref={userRef}
                type="text"
                label="User Name"
                name="username"
              />

              <Input
                ref={passwordRef}
                type="password"
                label="Password"
                name="password"
              />

              <Input type="email" label="Email" name="email" />

              <Input type="text" label="Mobile No" name="number" />
              <div className="mb-2">
                <button className="btn btn-success">Save</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
