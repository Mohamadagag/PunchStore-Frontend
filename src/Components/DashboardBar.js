import React from "react";
import "../Css/DashboardBar.css";
import Logo from "../Images/LOGO.svg";
import { Link, useLocation, Navigate } from "react-router-dom";
export default function DashboardBar() {
  // const location = useLocation().state;
  // if (!location || !location.loggedIn) return <Navigate replace to="/" />;
  return (
    <div className="dashboard">
      <img src={Logo} alt="logo" id="Logo-img" />
      <div className="sidenav">
        <ul>
          <li>
            <Link to="..">Products</Link>
          </li>
          <li>
            <Link to="../editPassword">Change password</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
