import React from "react";
import FirstProduct from "../Images/Accessories.svg";
import SecondProduct from "../Images/PC.svg";
import ThirdProduct from "../Images/Console.svg";
import MobileFrame from "../Images/MobileFrame.svg";
import Laptop from "../Images/Laptop.svg";
import { Link } from "react-router-dom";

export default function Newproducts() {
  return (
    <div className="new-products">
      <div className="product-1">
        <img src={FirstProduct} alt="Accessories" id="FirstProduct" />
        <img src={MobileFrame} alt="MobileFrame " id="MobileFrame1" />
        <h2>Accessories</h2>
        <p>Get the latest PC and Console accessories from our store.</p>
        <Link to="/products">Shop accessories</Link>
      </div>

      <div className="product-1">
        <h1>NEW PRODUCTS</h1>
        <hr />
      </div>

      <div className="product-2">
        <img src={SecondProduct} alt="PC" id="SecondProduct" />
        <img src={MobileFrame} alt="MobileFrame" id="MobileFrame2" />
        <h2>PC</h2>
        <p>Build your PC or buy a prebuilt PC.</p>
        <Link to="/products">Shop PC</Link>
      </div>

      <div className="product-3">
        <img src={ThirdProduct} alt="Third Product" id="ThirdProduct" />
        <img src={MobileFrame} alt="MobileFrame" id="MobileFrame3" />
        <h2>Consoles</h2>
        <p>Get the latest Consoles.</p>
        <Link to="/products">Shop consoles</Link>
      </div>

      <img src={Laptop} alt="Laptop" id="Laptop" />
    </div>
  );
}
