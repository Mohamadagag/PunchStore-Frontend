import React from "react";
import { FiSearch } from "react-icons/fi";
import Logo from "../Images/LOGO.svg";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <img src={Logo} alt="Logo" id="logo-img" />
      <Link to="/dashboard">
        <AiOutlineUser size="2rem" />
      </Link>
    </header>
  );
}
