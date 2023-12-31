import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./assets/pages/login.jsx";
import Signup from "./assets/pages/signup.jsx";
import Nav from "./assets/components/nav.jsx";
import Home from "./assets/pages/Home.jsx";
import { useAuthContext } from "../hooks/useAuthContext.jsx";
const App = () => {
  const { user } = useAuthContext();
  return (
    <div className="h-svh ">
      <Nav />
      <div className=" bg-slate-100 h-screen">
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/signup" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
