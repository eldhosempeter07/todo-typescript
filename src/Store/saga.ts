import { all, fork } from "redux-saga/effects";
import TodoSaga from "./Todo/saga";
import UserSaga from "./User/saga";

export default function* rootSaga() {
  yield all([
      fork(UserSaga),
      fork(TodoSaga),
  ]);
}
