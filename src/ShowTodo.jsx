import React,{ useContext,useRef } from 'react';
import { Store } from './context/TodoStore';


const ShowTodo = ({TodoArray,setTaskValue}) => {
  const {dispatch} = useContext(Store);
  console.log(TodoArray)

  const editHanlder = (todo) =>{
    dispatch({type: 'DeleteTask',payload:todo});
  }
  return (
    <div className='todo-wrapper'>
      {
        TodoArray.map((todo)=>{
          return(
            <div key={todo.id}>
              <input 
                type="checkbox" 
                defaultChecked={todo.isCompleted?true:false}
                onClick={()=>dispatch({type: 'CompletedTask',payload:todo})}
              />
              <p>{todo.task}</p>
              <i className="fa-solid fa-pen-to-square" onClick={()=>{editHanlder(todo)}}></i>
              <i className="fa-solid fa-trash" onClick={()=>dispatch({type: 'DeleteTask',payload:todo})}></i>
            </div>
          )
        })
      }
    </div>
  )
}

export default ShowTodo;