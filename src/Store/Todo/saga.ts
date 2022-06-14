import { Action } from "redux";
import { call, put, takeLatest } from "redux-saga/effects";
import { add, del, get, update } from "../../Helpers/api_helpers";
import { AddTodoProps, deleteTodoProps, getTodo, GetTodoByIdProps, GetTodosProps, updateTodoProps } from "../../Helpers/interfaces";
import { addTodoBegin, addTodoFail, addTodoSuccess, deleteTodosBegin, deleteTodosFail, deleteTodosSuccess, getTodobyIdBegin, getTodobyIdFail, getTodobyIdSuccess, getTodosBegin, getTodosFail, getTodosSuccess, updateTodosBegin, updateTodosFail, updateTodosSuccess } from "./actions";
import { ADD_TODO, DELETE_TODO, GET_TODO, GET_TODO_BY_ID, UPDATE_TODO } from "./actionTypes";
interface AddTodoAction extends Action, AddTodoProps {type:"ADD_TODO"}
interface GetTodosAction extends Action, GetTodosProps {type:"GET_TODO"}
interface GetTodoByIdAction extends Action, GetTodoByIdProps {type:"GET_TODO_BY_ID"}
interface UpdateAction extends Action, updateTodoProps {type:"UPDATE_TODO"}
interface DeleteAction extends Action, deleteTodoProps {type:"DELETE_TODO"}


function* addTodo(res:AddTodoProps):Generator {
    try {
        yield put(addTodoBegin())
        const response = yield call(add,"/todo",res?.data)
        if(response){
        yield put(addTodoSuccess())
        res?.callback && res?.callback()
    }
    } catch (error:any) {
        yield put(addTodoFail(error))
        
    }
}

function* getTodos():Generator {
    try {
        yield put(getTodosBegin())
        const response = yield call(get,"/todo")
        if(response){
        yield put(getTodosSuccess(response as GetTodosProps))
    }
    } catch (error:any) {
        // console.log(error);
        yield put(getTodosFail(error))
        
    }
}

function* getTodobyId(res:getTodo):Generator {
    try {
        console.log();
        
        yield put(getTodobyIdBegin())
        const response = yield call(get,`/todo/${res.data.id}`)
        if(response){
        yield put(getTodobyIdSuccess(response as GetTodoByIdProps))
    }
    } catch (error:any) {
        yield put(getTodobyIdFail(error))
        
    }
}

function* updateTodo(res:updateTodoProps):Generator {
    try {
        console.log(res);
        
        yield put(updateTodosBegin ())
        const response = yield call(update,`/todo/${res.id}`,res.data)
        if(response){
        yield put(updateTodosSuccess())
            res.callback && res.callback()
    }
    } catch (error:any) {
        yield put(updateTodosFail(error))
        
    }
}


function* deleteTodo(res:deleteTodoProps):Generator {
    try {
        console.log(res);   
        yield put(deleteTodosBegin ())
        const response = yield call(del,`/todo/${res.id}`)
        if(response){
        yield put(deleteTodosSuccess())
            res.callback && res.callback()
    }
    } catch (error:any) {
        yield put(deleteTodosFail(error))
        
    }
}


function* TodoSaga() {
    yield takeLatest<AddTodoAction>(ADD_TODO,addTodo)
    yield takeLatest<GetTodosAction>(GET_TODO,getTodos)
    yield takeLatest<GetTodoByIdAction>(GET_TODO_BY_ID,getTodobyId)
    yield takeLatest<UpdateAction>(UPDATE_TODO,updateTodo)
    yield takeLatest<DeleteAction>(DELETE_TODO,deleteTodo)
}
export default TodoSaga