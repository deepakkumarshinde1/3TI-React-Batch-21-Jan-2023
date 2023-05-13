const ToDoList = ({ toList }) => {
  return (
    <>
      <ul className="list-group">
        {toList.map((item, index) => {
          return (
            <li key={index} className="list-group-item">
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ToDoList;
