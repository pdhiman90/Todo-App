import { useRef } from "react";
import { FcPlus } from "react-icons/fc";

function AppTodo({ onNewItem }) {

  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const toDueDateElement = useRef();


  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // }
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`no of updates are : ${noOfUpdates.current}`);
  // }

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = toDueDateElement.current.value;
    todoNameElement.current.value = "";
    toDueDateElement.current.value = "";
    console.log(`name : ${todoName} and dueDate : ${dueDate}`);
    onNewItem(todoName, dueDate);
    // setTodoName("");
    // setDueDate("");
  }

  return (<div className="container text-center">
    {/* first row */}
    <form
      onSubmit={handleAddButtonClicked}
      className="row row1">
      <div className="col-5">
        <input type="text" 
        ref={todoNameElement}
        // onChange={handleNameChange}
          placeholder='Enter Todo Here...'
          // value={todoName}
        />

      </div>
      <div className="col-4">
        <input type="date"
          ref={toDueDateElement}
          // value={dueDate}
          // onChange={handleDateChange} 
          />
      </div>
      <div className="col-2">
        <button
          type="submit"
          className="btn btn-success button1">
          <FcPlus />
        </button>
      </div>
    </form><br />
  </div>
  );
}


export default AppTodo;