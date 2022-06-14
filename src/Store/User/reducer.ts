import { GET_USER_LIST_BEGIN, GET_USER_LIST_FAIL, GET_USER_LIST_SUCCESS, REGISTER_USER_BEGIN, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS, REMOVE_MESSAGE } from "./actionTypes"

const inital_state = {
    loading:false,
    error:"",
    userList:[],
    success:""
}

interface UserProps  {
    type:string,
    payload?:object
}

export const User = (state=inital_state,action:UserProps) =>{
    switch(action.type){
        case REGISTER_USER_BEGIN:
            return{
                ...state,
                loading:true,
                error:""
            }
        case REGISTER_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                error:"",
                success:"Registered Successfully"
            }
        case REGISTER_USER_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
                success:""
            }

            case GET_USER_LIST_BEGIN:
                return{
                    ...state,
                    loading:true,
                    error:""
                }
            case GET_USER_LIST_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    userList:action.payload,
                    error:""
                }
            case GET_USER_LIST_FAIL:
                return{
                    ...state,
                    userList:[],
                    loading:false,
                    error:action.payload
                }
            
            case REMOVE_MESSAGE:
                return{
                    ...state,
                    success:"",
                    error:""
                }
                        
        default: return state

    }
}

export default User

