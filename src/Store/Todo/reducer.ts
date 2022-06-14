import { ADD_TODO_BEGIN, ADD_TODO_FAIL, ADD_TODO_SUCCESS, DELETE_TODO_BEGIN, DELETE_TODO_FAIL, DELETE_TODO_SUCCESS, GET_TODO_BEGIN, GET_TODO_BY_ID_BEGIN, GET_TODO_BY_ID_FAIL, GET_TODO_BY_ID_SUCCESS, GET_TODO_FAIL, GET_TODO_SUCCESS, UPDATE_TODO_BEGIN, UPDATE_TODO_FAIL, UPDATE_TODO_SUCCESS } from "./actionTypes"

const inital_state = {
    loading:false,
    error:"",
    todoList:[],
    todo:{}
}

interface TodoProps  {
    type:string,
    payload?:object
}

export const Todo = (state=inital_state,action:TodoProps) =>{
    switch(action.type){
        case ADD_TODO_BEGIN:
            return{
                ...state,
                loading:true,
                error:""
            }
        case ADD_TODO_SUCCESS:
            return{
                ...state,
                loading:false,
                error:""
            }
        case ADD_TODO_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        case GET_TODO_BEGIN:
            return{
                ...state,
                loading:true,
                error:""
            }
        case GET_TODO_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                todoList:action.payload
            }
        case GET_TODO_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
                todoList:{}

            }

            case GET_TODO_BY_ID_BEGIN:
                return{
                    ...state,
                    loading:true,
                    error:""
                }
            case GET_TODO_BY_ID_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    error:"",
                    todo:action.payload
                }
            case GET_TODO_BY_ID_FAIL:
                return{
                    ...state,
                    loading:false,
                    error:action.payload,
                    todo:{}
                }
            case UPDATE_TODO_BEGIN:
                return{
                    ...state,
                    loading:true,
                    error:""
                }
            case UPDATE_TODO_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    error:""
                }
            case UPDATE_TODO_FAIL:
                return{
                    ...state,
                    loading:false,
                    error:action.payload
                }

            case DELETE_TODO_BEGIN:
                return{
                    ...state,
                    loading:true,
                    error:""
                }
            case DELETE_TODO_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    error:""
                }
            case DELETE_TODO_FAIL:
                return{
                    ...state,
                    loading:false,
                    error:action.payload
                }
            
            default: return state

    }
}

export default Todo
