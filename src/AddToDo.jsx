import React,{ useReducer,useRef, useState,useContext, useEffect } from 'react';
import ShowTodo from './ShowTodo';
import { v4 as uuidv4 } from 'uuid';

import { Store } from './context/TodoStore';

const AddToDo = () => {

  const {dispatch} = useContext(Store);
  const [taskValue,setTaskValue] = useState('');
  const [editTaskValue,setEditTaskValue] = useState('')

  const setToDo = () =>{
    if(taskValue==='') return;
    dispatch({type: 'AddToDo',payload:{id:uuidv4(),task:taskValue,isCompleted:false}});
    setTaskValue('')
  }
  return (
    <div className='add-task'>
     <div className='top-section'>
      <input 
          type="text" 
          placeholder='Add you daily task'
          value={taskValue}
          onChange={(e)=>setTaskValue(e.target.value)}
          id='input'
          />
        <button id='add-task-btn' onClick={setToDo}>Add to task</button>
     </div>
      <ShowTodo taskValue={taskValue} setEditTaskValue={setEditTaskValue} setTaskValue={setTaskValue}/>
    </div>
  )
}

export default AddToDo;