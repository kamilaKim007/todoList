import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from './redux';
import { addTodo, editTask, deleteTodo, importantTodo, checkTask } from './redux/reducers/todo';
import './scss/style.scss'


function App() {
  const dispatch = useDispatch()
  const todos = useSelector((store) => store.todos.todos)

  const [todo , setTodo] = useState("")
  const [value, setValue] = useState("")
  const [checked, setChecked] = useState("")
  
  
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
              <li style={{margin: '20px 0', 
                          color: item.isImportant ? 'red' : ''} }  key={item.id}>{item.title} 
              <button type='button' style={{margin:'0 40px'}} onClick={() => {dispatch(deleteTodo(item.id))}}>delete</button> 
              <button type='button' onClick={() => dispatch(importantTodo(item.id))}>important</button>
              <button type='button' style={{margin: '0 20px'}} onClick={() => {dispatch(editTask(item.id, value, item.change))
              if(item.change){
                setValue("")
              }else{
                setValue(item.title)
              }}}>
                {item.change ? 'save' : 'edit'}
                </button>
              
              
              <input type="checkbox" onChange={(e) => setChecked(e.target.value)} value={checked}
              // onClick={() => {dispatch(checkTask(item.title, value, item.check))
              //   if(item.check){
              //     setChecked("")
              //   }else{
              //     setChecked(item.title)
              //   }}}
              />
              {/*  <p>{item.check ? 'checked-item' : ''}</p> */}
              </li>
            ))
          }
        </ul>
    </div>
  );
}

export default App;