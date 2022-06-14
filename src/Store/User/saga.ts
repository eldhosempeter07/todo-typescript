import { Action } from "redux";
import { call, put, takeLatest } from "redux-saga/effects";
import { add, get } from "../../Helpers/api_helpers";
import { GetUsers, RegisterProps } from "../../Helpers/interfaces";
import { getUserListBegin, getUserListFail, getUserListSuccess, registerUserBegin, registerUserFail, registerUserSuccess } from "./actions";
import { GET_USER_LIST, REGISTER_USER } from "./actionTypes";
interface RegisterAction extends Action, RegisterProps {type:"REGISTER_USER"}
interface GetUsersAction extends Action,GetUsers {type:"GET_USER_LIST"}

function* registerUser(res:RegisterProps):Generator {
    try {
        yield put(registerUserBegin())
        const response = yield call(add,"/users",res?.data)
        if(response){
        yield put(registerUserSuccess())
        res?.callback && res?.callback()
    }
    } catch (error) {
        yield put(registerUserFail(error))
        
    }
}


function* getUserList():Generator {
    try {
        yield put(getUserListBegin())
        const response = yield call(get,"/users")
        if(response){
        yield put(getUserListSuccess(response as GetUsers))
    }
    } catch (error) {
        yield put(getUserListFail(error))
        
    }
}

function* UserSaga() {
    yield takeLatest<RegisterAction>(REGISTER_USER,registerUser)
    yield takeLatest<GetUsersAction>(GET_USER_LIST,getUserList)
}
export default UserSaga