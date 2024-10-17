import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos:  [
    {
        id : 1,
        todo: "ToDo mssg",
        completed: false
    }
  ],
  addToDo: (todo) =>{},
  deleteToDo: (id) =>{},
  updateToDo: (id, todo) =>{},
  completeToDo: (id) =>{}
})

export const useToDo = () =>{
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider