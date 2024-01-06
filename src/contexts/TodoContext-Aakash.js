import  {createConext , useContext} from 'react'

export const TodoContext = () => {
    todos : [
        {
            id : 1 ,
            todo : "Todo Msg",
            complete : false
        }
    ]
    addTodo = (todo) => {},
    updateTodo = (id , todo ) => {} ,
    deleteTod0 = (id) => {},
    toggleTodo = (id) => {}

}

export const useTodo =()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider