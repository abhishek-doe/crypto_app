import React, { useEffect } from "react";
import Components from "./Components";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup.js";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { setUser } from "./features/user";
import { useDispatch } from "react-redux";
import axios from "axios";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getSession = async () => {
      try {
        const response = await axios
          .get("/api/session/getSession")
          .then(({ data }) => dispatch(setUser(data.user)))
          .catch((err) => console.log(err));

        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    getSession();
  }, []);

  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Components />} />


        <Route element={<ProtectedRoutes />}>
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Route>


        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
