import React,{ useReducer,useRef, useState,useContext } from 'react';
import ShowTodo from './ShowTodo';
import { v4 as uuidv4 } from 'uuid';

import { Store } from './context/TodoStore';

const AddToDo = () => {

  const {state,dispatch} = useContext(Store);
  const [taskValue,setTaskValue] = useState('');

  const setToDo = () =>{
    dispatch({type: 'AddToDo',payload:{id:uuidv4(),task:taskValue,isCompleted:false}});
    setTaskValue('')
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder='Add you daily task'
        value={taskValue}
        onChange={(e)=>setTaskValue(e.target.value)}
        />
      <button onClick={setToDo}>Add to task</button>
      <ShowTodo TodoArray={state.todos} setTaskValue={setTaskValue}/>
    </div>
  )
}

export default AddToDo;