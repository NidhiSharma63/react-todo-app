import React,{ useContext,useRef,useEffect, useState } from 'react';
import { Store } from './context/TodoStore';


const ShowTodo = ({setTaskValue,taskValue,setEditTaskValue}) => {
  const {state,dispatch} = useContext(Store);
  const editHanlder = (todo) =>{
    setTaskValue(todo.task);
    // todo.task=taskValue
    // dispatch({type: 'DeleteTask',payload:todo});
  }
  return (
    <div className='bottom-section'>
      {
       state.todos.map((todo)=>{
          return(
            <div className='single-task' key={todo.id}>
              <input 
                type="checkbox" 
                defaultChecked={todo.isCompleted?true:false}
                onClick={()=>dispatch({type: 'CompletedTask',payload:todo})}
              />
              <p>{todo.task}</p>
              <div className='icon-wrap'>
                <i className="fa-solid fa-pen-to-square" onClick={()=>{editHanlder(todo)}}></i>
                <i className="fa-solid fa-trash" onClick={()=>dispatch({type: 'DeleteTask',payload:todo})}></i>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ShowTodo;