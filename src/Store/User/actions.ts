import { GET_USER_LIST, GET_USER_LIST_BEGIN, GET_USER_LIST_FAIL, GET_USER_LIST_SUCCESS, REGISTER_USER, REGISTER_USER_BEGIN, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS } from "./actionTypes";

export const registerUser = (data:object,callback:()=>void) =>({
    type:REGISTER_USER,
    data:data,
    callback:callback
})

export const registerUserBegin = () =>({
    type:REGISTER_USER_BEGIN,
})

export const registerUserSuccess = () =>({
    type:REGISTER_USER_SUCCESS,
})

export const registerUserFail = (error:any) =>({
    type:REGISTER_USER_FAIL,
    payload:error
})

export const getUserList = () =>({
    type:GET_USER_LIST,
})

export const getUserListBegin = () =>({
    type:GET_USER_LIST_BEGIN,
})

export const getUserListSuccess = (data:{}) =>({
    type:GET_USER_LIST_SUCCESS,
    payload:data
})

export const getUserListFail = (error:any) =>({
    type:GET_USER_LIST_FAIL,
    payload:error
})