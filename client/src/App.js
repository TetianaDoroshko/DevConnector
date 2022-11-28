import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Landing } from "./components/layout/Landing";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import { Alert } from "./components/layout/Alert";
import { useEffect } from "react";
import { refreshToken } from "./redux/operations(thunks)";
import { Dashboard } from "./components/dashboard/Dashboard";
import { PrivateRoute } from "./components/routing/PrivateRoute";

const App = () => {
  const alerts = useSelector((store) => store.alert);
  const token = useSelector((store) => store.auth.token);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("token", token);
    if (token) {
      dispatch(refreshToken(token));
    } else {
      return;
    }

    // return () => {
    //   second;
    // };
  }, [dispatch, token]);

  return (
    <>
      <Navbar />
      <Alert alerts={alerts} />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
