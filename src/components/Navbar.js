import React, { useState } from "react";
import { FaBars, FaTimes, FaUserAlt } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../features/user";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user, isAuth } = useSelector((state) => state.userSlice);


  const dispatch = useDispatch();

  const navigate = useNavigate();

  //for menu
  const [showMenu, setShowMenu] = useState(false);

  //admin profile and dashboard
  const [isAdminOpen, setAdminOpen] = useState(false);
  const toggleAdmin = () => {
    setAdminOpen((prev) => !prev);
    setShowMenu(false);
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);
    setAdminOpen(false);
  };
  
  //logout
  const handleLogout = async () => {
    await axios
      .get("/api/session/logout")
      .then(() => dispatch(logout()))
      .catch((err) => console.log(err));

    navigate("/");
  };



  return (
    <div className="header">
      <div className="container">
        <h1>
          G<span className="primary">.</span>T<span className="primary">.</span>M<span className="primary">.</span>
        </h1>
        <ul className={showMenu ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#featured">Featured</a>
          </li>
          <li>
            <a href="/">Earn</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
        <div className="btn-group">
          {isAuth ? (
            <div className="admin">
              <div className="userAndLogout">
                <div className="faName">
                  <FaUserAlt size={30} onClick={toggleAdmin} />
                  <h5 onClick={toggleAdmin}>{user.username}</h5>
                </div>
                <div>
                  <button className="btn" onClick={handleLogout}>
                    LogOut
                  </button>
                </div>
              </div>

              {isAdminOpen && (
                <ul className="admin-menu" >
                  <Link to="/profile">
                    <li>Profile</li>
                  </Link>
                  <Link to="/dashboard">
                    <li>Dashboard</li>
                  </Link>
                </ul>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="btn">Log In</button>
            </Link>
          )}
        </div>
        <div className="hamburger" onClick={handleMenu}>
          {showMenu ? <FaTimes size={20} style={{ color: "#333" }} /> : <FaBars size={20} style={{ color: "#333" }} />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;