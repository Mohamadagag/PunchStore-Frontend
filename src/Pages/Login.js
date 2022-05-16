import React from "react";
import login from "../Images/login.svg";
import Triangle from "../Images/Triangle.svg";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Products() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const logIn = (e) => {
    e.preventDefault();
    console.log("Enter");
    if (username === "admin" && password === "admin") setLoggedIn(true);
  };

  if (loggedIn)
    return <Navigate to="/dashboard" state={{ loggedIn: loggedIn }} />;
  return (
    <>
      <div class="login-container">
        <div class="login-header">
          <img src={login} alt="login" id="login" />
          <img src={Triangle} alt="Triangle" id="Triangle" />
          <h1>Login</h1>
        </div>
        <div class="login-form">
          <form class="login-inputs" onSubmit={logIn}>
            <input
              type="text"
              placeholder="Email"
              id="email"
              id="login-form"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              id="password"
              id="login-form"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" id="Login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Products;
