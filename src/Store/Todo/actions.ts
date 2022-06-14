import { ADD_TODO, ADD_TODO_BEGIN, ADD_TODO_FAIL, ADD_TODO_SUCCESS, DELETE_TODO, DELETE_TODO_BEGIN, DELETE_TODO_FAIL, DELETE_TODO_SUCCESS, GET_TODO, GET_TODO_BEGIN, GET_TODO_BY_ID, GET_TODO_BY_ID_BEGIN, GET_TODO_BY_ID_FAIL, GET_TODO_BY_ID_SUCCESS, GET_TODO_FAIL, GET_TODO_SUCCESS, UPDATE_TODO, UPDATE_TODO_BEGIN, UPDATE_TODO_FAIL, UPDATE_TODO_SUCCESS } from "./actionTypes";

export const addTodo = (data:object,callback:()=>void) =>({
    type:ADD_TODO,
    data:data,
    callback:callback
})

export const addTodoBegin = () =>({
    type:ADD_TODO_BEGIN,
})

export const addTodoSuccess = () =>({
    type:ADD_TODO_SUCCESS,
})

export const addTodoFail = (error:any) =>({
    type:ADD_TODO_FAIL,
    payload:error
})

export const getTodos = () =>({
    type:GET_TODO,
})

export const getTodosBegin = () =>({
    type:GET_TODO_BEGIN,
})

export const getTodosSuccess = (data:object) =>({
    type:GET_TODO_SUCCESS,
    payload:data
})

export const getTodosFail = (error:any) =>({
    type:GET_TODO_FAIL,
    payload:error
})

export const getTodobyId = (data:object) =>({
    type:GET_TODO_BY_ID,
    data:data
})

export const getTodobyIdBegin = () =>({
    type:GET_TODO_BY_ID_BEGIN,
})

export const getTodobyIdSuccess = (data:object) =>({
    type:GET_TODO_BY_ID_SUCCESS,
    payload:data
})

export const getTodobyIdFail = (error:any) =>({
    type:GET_TODO_BY_ID_FAIL,
    payload:error
})


export const updateTodos = (data:object,id:string,callback:()=>void) =>({
    type:UPDATE_TODO,
    data:data,
    id:id,
    callback:callback
})

export const updateTodosBegin = () =>({
    type:UPDATE_TODO_BEGIN,
})

export const updateTodosSuccess = () =>({
    type:UPDATE_TODO_SUCCESS,
})

export const updateTodosFail = (error:any) =>({
    type:UPDATE_TODO_FAIL,
    payload:error
})

export const deleteTodos = (id:string,callback:()=>void) =>({
    type:DELETE_TODO,
    id:id,
    callback:callback
})

export const deleteTodosBegin = () =>({
    type:DELETE_TODO_BEGIN,
})

export const deleteTodosSuccess = () =>({
    type:DELETE_TODO_SUCCESS,
})

export const deleteTodosFail = (error:any) =>({
    type:DELETE_TODO_FAIL,
    payload:error
})
