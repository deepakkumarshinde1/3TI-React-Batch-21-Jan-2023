const AddToDo = (props) => {
  let { input, setInput, saveTodo } = props;
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo"
          aria-label="Username"
          value={input}
          aria-describedby="basic-addon1"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          title="my-button-title"
          className="input-group-text btn btn-success "
          onClick={saveTodo}
        >
          Add Todo
        </button>
      </div>
    </>
  );
};

export default AddToDo;
