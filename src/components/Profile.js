import React from "react";
import "./Profile.css";
import { useSelector } from "react-redux";
import {FaUserAlt} from "react-icons/fa"

const Profile = () => {
  const user = useSelector((state) => state.userSlice.user);

  return (
    <div className="profile">
      {/* <div className="container"> */}
        <h2 className="profile-heading" >PROFILE</h2>
        <div className="detailsC">
        <FaUserAlt size={100}  className="profile-admin"/>
          <div className="details">
          <h3 className="name">Name: &nbsp;  <span>{user.username}</span></h3>
          <h3 className="email">Email: &nbsp; <span>{user.email}</span></h3>
          <button className="btn">Edit</button>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Profile;
