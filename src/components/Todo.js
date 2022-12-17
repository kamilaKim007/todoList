import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {addTodo, deleteTodo, removeTodo} from "../action/index"

const Todo = () => {
    
    const [inputData, setInputData] = useState();
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();

  return (
    
    <>
    <div className='todolist'>
      <div className='childlist'>
        <figure>
        <figcaption>Add your List here</figcaption>
        </figure>

        <div className='addItems'>
          <input type="text" placeholder='Add objects...'
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
          />
          <i className='plus-btn' onClick={() => dispatch(addTodo(inputData),
            setInputData(''))}></i>
        </div>

        <div className='showItems'>
            {
                list.map((elem) => {
                    return(
                        <div className='eachItem' key={elem.id}>
                        <h3>{elem.data}</h3>
                        <div className='todo-btn'>
                        <i className='add-btn' title="delete-item" onClick={() => dispatch(deleteTodo(elem.id))}></i>
                    </div>
                    </div>
                    )
                     
                })
            }
           
        </div>


        <div className='showItems'>
            <button className='dtn-effect' data-sm-link-text="remove all"
            onClick={() => dispatch(removeTodo())}>
                <span>Check List</span>
            </button>
        </div>


      </div>
    </div>
    </>
  )
}

export default Todo