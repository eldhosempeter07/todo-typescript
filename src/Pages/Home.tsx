import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodosProps, UserProps } from "../Helpers/interfaces";
import { getLocalStorage, removeLocalStorage } from "../Helpers/utils";
import { RootState } from "../Store/reducer";
import {
  addTodo,
  deleteTodos,
  getTodobyId,
  getTodos,
  updateTodos,
} from "../Store/Todo/actions";
import { getUserList } from "../Store/User/actions";
import Form from "./Form";

export const Home = () => {
  const [todo, setTodo] = useState<string>("");
  const [editId, setEditId] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<string>("");
  const [currentUserName, setCurrentUserName] = useState<string>("");
  const [isAddtodo, setIsAddTodo] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false);
  const user: UserProps = useSelector((state: RootState) => state.User);
  const todos: TodosProps = useSelector((state: RootState) => state.Todo);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      addTodo(
        {
          name: todo,
          completed,
          createdBy: currentUser,
        },
        () => {
          setIsAddTodo(false);
          dispatch(getTodos());
        }
      )
    );
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodos(id, () => dispatch(getTodos())));
  };

  useEffect(() => {
    if (todo == "") {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
  }, [todo]);

  const email = getLocalStorage("email");

  useEffect(() => {
    dispatch(getUserList());
    dispatch(getTodos());
  }, []);

  useEffect(() => {
    const current = user?.userList?.find((user) => user?.email == email);
    current?.id && setCurrentUser(current?.id);
    current?.name && setCurrentUserName(current?.name);
  }, [user?.userList]);

  useEffect(() => {
    todos.todo?.name && setTodo(todos.todo?.name);
    todos.todo?.completed && setCompleted(todos.todo?.completed);
  }, [todos.todo]);

  const handleEdit = (id: string) => {
    setIsAddTodo(false);
    setEditId(id);
    dispatch(getTodobyId({ id: id }));
  };

  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      updateTodos(
        {
          name: todo,
          completed,
        },
        editId,
        () => {
          dispatch(getTodos());
          setEditId("");
          setTodo("");
          setCompleted(false);
        }
      )
    );
  };

  const handleLogout = () => {
    removeLocalStorage("isLoggedIn");
    removeLocalStorage("email");
  };

  const addNewHandle = () => {
    setIsAddTodo(true);
    setEditId("");
    setTodo("");
    setCompleted(false);
  };

  const handleAddNewCancel = () => {
    setIsAddTodo(false);
  };

  const handleUpdateCancel = () => {
    setEditId("");
  };

  return (
    <div className="min-h-screen container text-center">
      <div className="text-end mt-5">
        <h3 className="text-xl text-blue-700">{currentUserName}</h3>
        <a className="hover:underline" onClick={handleLogout} href="/">
          Logout
        </a>
      </div>
      <h1 className="font-bold text-3xl mt-5 ">TODOS</h1>
      <br />
      {!isAddtodo ? (
        <button
          className="bg-blue-500 px-6 py-2.5 rounded text-white font-medium text-xs  uppercase"
          onClick={addNewHandle}
        >
          Add New
        </button>
      ) : (
        <Form
          completed={completed}
          handleAddNewCancel={handleAddNewCancel}
          handleSubmit={handleSubmit}
          setCompleted={setCompleted}
          setTodo={setTodo}
          todo={todo}
          buttonText="Save"
        />
      )}
      <ul className="mb-5">
        {todos?.todoList?.map((data) =>
          editId == data.id ? (
            <Form
              completed={completed}
              handleAddNewCancel={handleUpdateCancel}
              handleSubmit={handleUpdate}
              setCompleted={setCompleted}
              setTodo={setTodo}
              todo={todo}
              buttonText="Update"
            />
          ) : (
            <div className="flex justify-center my-3 ">
              <div className="block p-6 rounded-lg shadow-lg bg-white w-80">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                  {data.name}
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  Status: {data?.completed ? "Completed" : "Pending"}
                </p>
                <button
                  type="button"
                  onClick={() => handleEdit(data?.id)}
                  className="mr-2 inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs  uppercase rounded 
                  shadow-md hover:bg-gray-700 "
                >
                  EDIT
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(data?.id)}
                  className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs 
                  leading-tight uppercase rounded  hover:bg-red-700 "
                >
                  DELETE
                </button>
              </div>
            </div>
          )
        )}
      </ul>
    </div>
  );
};
