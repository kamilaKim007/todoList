import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { addTodo , removeTodo } from "./action/index";
import { useState } from "react";

function App() {

  const [counter , setCounter] = useState(0)
  const [todo , setTodo] = useState("");
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();

  const todoSubmitHandler = () => {
    if (todo !== "") {
      dispatch(addTodo(counter , todo))
      setCounter(counter + 1)
      setTodo("")
    }
  }

  return (
  <>
        <h1>Add your ToDo List here</h1>
      <input
        className="inputAdd" 
        type="text" 
        value={todo} 
        onChange={e => setTodo(e.target.value)}/>
  
    <button
      className="buttonAdd"
      onClick={todoSubmitHandler}>OK</button>
      

    <div className="todos">
      <ul>
        {
          todos?.map((todo) => (
            <li className="todo" key={todo.id}>
              <p>{todo.task}</p>
              <button onClick={() => dispatch(removeTodo(todo.id))}>OK</button>
            </li>
          ))
        }
      </ul>
    </div>
    </>
  );
}

export default App;