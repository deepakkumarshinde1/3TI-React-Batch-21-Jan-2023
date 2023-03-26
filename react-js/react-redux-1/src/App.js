import UserForm from "./components/UserForm";

function App() {
  return (
    <>
      <main className="container">
        <div className="row justify-content-center">
          <div className="col-10 border border-3 p-3 mt-4">
            <UserForm />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
