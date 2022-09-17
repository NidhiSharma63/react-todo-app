import React, { createContext, useReducer } from "react";

export const Store = createContext();

const reducer = (state,action) =>{
  switch(action.type){
    case 'AddToDo':{
      if(action.payload==='') return state;
      return{
        ...state,
        todos:[...state.todos,action.payload]
      }
    }
    case 'DeleteTask':{
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }
    case 'CompletedTask':{
      return{
        ...state,
        todos:state.todos.map((todo)=>{
          if(todo.id===action.payload.id){
            // make true is completed 
            todo.isCompleted=!action.payload.isCompleted;
          }
          // after that return all the array
          return todo;
        }),
      }
    }
  }
  return state;
}
const initialState = {
  todos:[],
};

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}
