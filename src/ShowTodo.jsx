import React,{ useContext } from 'react';
import { Store } from './context/TodoStore';


const ShowTodo = ({setTaskValue,editTaskValue,setEditObj}) => {
  const {state,dispatch} = useContext(Store);
  const editHanlder = (todo) =>{
    setEditObj(todo);
    setTaskValue(todo.task)    
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
              <p>{editTaskValue?editTaskValue:todo.task}</p>
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