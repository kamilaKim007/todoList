import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from './redux';
import { addTodo, changeTodo, deleteTodo, importantTodo } from './redux/reducers/todo';

function App() {
  const dispatch = useDispatch()
  const todos = useSelector((store) => store.todos.todos)

  const [todo , setTodo] = useState("")
  const [change, setChange] = useState("")
  
  return (
    <div className="App">
        <div>
          <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text"/>
          <button type='button' onClick={() => {dispatch(addTodo(todo))
          setTodo("")
          }}>ADD</button>
          <div>
            <input type="search"/>
            <button>FIND</button>
            {/* <button type='button' onClick={() => dispatch(importantTodo(item.id))}>important</button> */}
          </div>
        </div>
        <ul>
          {
            todos.map((item) => (
              <li style={{margin: '20px 0', color: item.isImportant ? 'red' : ''} }  key={item.id}>{item.title} 
              <button type='button' style={{margin:'0 40px'}} onClick={() => {dispatch(deleteTodo(item.id))}}>delete</button> 
              <button type='button' onClick={() => dispatch(importantTodo(item.id))}>important</button>
              <button type="button" onClick={() => {dispatch(changeTodo(item.id, setTodo(item.title)))}}>change</button>
                </li>
            ))
          }
        </ul>
        <div>
          <input onChange={(e) => setChange(e.target.value)} value={change} type="text"/>
          <button type='button' onClick={() => {dispatch(changeTodo(change))
          setChange("")
          }}>CHANGE</button>
        </div>
    </div>
  );
}

export default App;