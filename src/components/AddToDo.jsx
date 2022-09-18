import React,{ useReducer,useRef, useState,useContext, useEffect } from 'react';
import ShowTodo from './ShowTodo';
import { v4 as uuidv4 } from 'uuid';

import { Store } from '../context/TodoStore';

const AddToDo = () => {

  const {state,dispatch} = useContext(Store);
  const [taskValue,setTaskValue] = useState('');
  const [editObj,setEditObj] = useState({});
  const [showAddTaskBtn,setShowAddTaskBtn] = useState(true)

  const setToDo = () =>{
    if(taskValue==='') return;
    dispatch({type: 'AddToDo',payload:{id:uuidv4(),task:taskValue,isCompleted:false}});
    setTaskValue('');
  }

  const HandleEditTask = () =>{
    setEditObj(editObj.task=taskValue);
    setEditObj({});
    setTaskValue('');
    setShowAddTaskBtn(true)
  }

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state.todos));
  }, [editObj]);

  return (
    <div className='add-task'>
     <div className='top-section'>
      <input 
        type="text" 
        autoComplete='off'
        placeholder='Add you daily task'
        value={taskValue}
        onChange={(e)=>setTaskValue(e.target.value)}
        id='input'
      />
      {
        showAddTaskBtn?
        <button className='btn' onClick={setToDo}>
          <span>Add Task</span><i className="fa-solid fa-plus"></i>
        </button>
        : <button className='btn' onClick={HandleEditTask}>
          <span>EditYourTask</span><i className="fa-solid fa-plus"></i>
        </button>
      }
     </div>
      <ShowTodo setShowAddTaskBtn={setShowAddTaskBtn} setEditObj={setEditObj} setTaskValue={setTaskValue}/>
    </div>
  )
}

export default AddToDo;