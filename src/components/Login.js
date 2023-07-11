import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {login} from "../features/user"

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.userSlice)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("/api/session/login", {
          email,
          password,
        })
        .then((response) => {
          dispatch(login(response.data.user))
        })
        .catch((err) => console.log(err));

      setEmail("");
      setPassword("")
      navigate("/");
    } catch (error) {
      // Handle error response
      console.error(error);
    }
  };

  useEffect(() => {
    if(isAuth){
      navigate('/')
    }
  }, [])

  return (
    <div className="login">
      <div className="container">
        <Link to="/">
          <h1></h1>
        </Link>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" className="email" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Enter your password" className="password" onChange={(e) => setPassword(e.target.value)} required />
          <button className="btn">Login</button>
        </form>
        <Link to="/signup">
          <h5>
            Doesn't have an account? <span className="green"> Sign up</span>
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default Login;
