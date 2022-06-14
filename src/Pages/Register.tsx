import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkIfValidEmail } from "../Helpers/utils";
import { registerUser } from "../Store/User/actions";

const Register = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState<string>("");
  const [name, setname] = useState<string>("");
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email == "" || name == "") {
      return setError("Please enter all fields");
    }
    if (!checkIfValidEmail(email)) {
      return setError("Please enter a valid email");
    }
    setError("");
    dispatch(registerUser({ email, name }, () => navigate("/login")));
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5">SIGN UP</h1>
          <div className="bg-white shadow w-full rounded-lg ">
            <form onSubmit={handleSubmit} className="px-5 py-7">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Name
              </label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
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
                <span className="inline-block mr-2">Register</span>
              </button>
              <p className="text-center mt-2 text-red-600">{error}</p>
              <div className="text-center">
                <a href="/login" className="hover:underline">
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
