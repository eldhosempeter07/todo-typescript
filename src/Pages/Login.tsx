import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserProps } from "../Helpers/interfaces";
import { checkIfValidEmail, setLocalStorage } from "../Helpers/utils";
import { RootState } from "../Store/reducer";
import { getUserList } from "../Store/User/actions";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setemail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const user: UserProps = useSelector((state: RootState) => state.User);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email == "") {
      return setError("Please enter the email id");
    }
    if (!checkIfValidEmail(email)) {
      return setError("Please enter a valid email");
    }
    const current = user?.userList?.find((user) => user?.email == email);
    if (current) {
      setLocalStorage("isLoggedIn", "true");
      setLocalStorage("email", email);
      navigate("/home");
    } else {
      return setError("Invalid Username");
    }
  };

  useEffect(() => {}, [user?.userList]);

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5">SIGN IN</h1>
          <div className="bg-white shadow w-full rounded-lg ">
            <form onSubmit={handleSubmit} className="px-5 py-7">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                E-mail
              </label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <button
                type="submit"
                className="transition duration-200 bg-blue-500 hover:bg-blue-600  text-white w-full 
                py-2.5 rounded-lg text-sm  font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">Login</span>
              </button>
              <p className="text-center mt-2 text-red-600">{error}</p>
              <div className="text-center">
                <a href="/register" className="hover:underline">
                  Register
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
