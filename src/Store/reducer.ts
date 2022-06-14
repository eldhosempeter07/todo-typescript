import { combineReducers } from "redux";
import User from "./User/reducer"
import Todo from "./Todo/reducer"
const rootReducer = combineReducers({
    User,
    Todo
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;
