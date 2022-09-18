import React,{ useReducer,useRef, useState,useContext, useEffect } from 'react';
import ShowTodo from './ShowTodo';
import { v4 as uuidv4 } from 'uuid';

import { Store } from './context/TodoStore';

const AddToDo = () => {

  const {state,dispatch} = useContext(Store);
  const [taskValue,setTaskValue] = useState('');
  const [editTaskValue,setEditTaskValue] = useState('');
  const [editObj,setEditObj] = useState({})

  const setToDo = () =>{
    if(taskValue==='') return;
    dispatch({type: 'AddToDo',payload:{id:uuidv4(),task:taskValue,isCompleted:false}});
    setTaskValue('');
  }

  const HandleEditTask = () =>{
    setEditObj(editObj.task=taskValue);
  }

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state.todos));
  }, [editObj]);

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
        <button onClick={HandleEditTask}>EditYourTask</button>
     </div>
      <ShowTodo setEditObj={setEditObj} editTaskValue={editTaskValue} taskValue={taskValue} setEditTaskValue={setEditTaskValue} setTaskValue={setTaskValue}/>
    </div>
  )
}

export default AddToDo;