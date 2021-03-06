import { Navigate, Route, Routes } from "react-router-dom";
import { getLocalStorage } from "./Helpers/utils";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  const auth = getLocalStorage("isLoggedIn");

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={auth ? "/home" : "/login"} replace />}
      />
      <Route
        path="/home"
        element={<Home />}
        // element={auth ? <Home /> : <Navigate to="/login" />}
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
