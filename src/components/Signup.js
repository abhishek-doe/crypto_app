import React, { useState, useEffect } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/user";

const Signup = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isAuth = useSelector(state => state.userSlice)

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("/api/session/register", {
          username,
          email,
          password,
        })
        .then((response) => dispatch(setUser(response.data.user)))
        
        .catch((err) => console.log(err));

      setUsername("");
      setEmail("");
      setPassword("");

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
    <div className="signup">
      <div className="container">
        <Link to="/"></Link>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <input name="name" type="text" placeholder="Enter your name" onChange={(e) => setUsername(e.target.value)} required />
            <input name="email" type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required />
            <input name="password" type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className="btn">Signup</button>
        </form>
        <Link to="/login">
          <h5 className="login-link">
            Already have an account? <span className="green">  Log in</span>
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
