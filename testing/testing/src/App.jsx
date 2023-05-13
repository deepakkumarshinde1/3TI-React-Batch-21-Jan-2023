import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import AddToDo from "./components/AddTodo/AddToDo";
import ToDoList from "./components/TodoList/ToDoList";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [toList, seTodoList] = useState([]);
  let saveTodo = () => {
    if (input !== "") {
      seTodoList([input, ...toList]);
      setInput("");
    }
  };
  return (
    <>
      <main className="container">
        <section className="row justify-content-center">
          <section className="col-6">
            <Header text="Todo App" />
            <AddToDo input={input} setInput={setInput} saveTodo={saveTodo} />
            <ToDoList toList={toList} />
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
