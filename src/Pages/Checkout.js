import "../Css/checkout.css";
import polygon from "../Images/Polygon 1.svg";
import { Link, useLocation, Navigate, useNavigate } from "react-router-dom";
import ordersapi from "../api/orders";

import React, { useState } from "react";

export default function Checkout(props) {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [appartment, setAppartment] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const location = useLocation().state;
  if (!location || !location.product) return <Navigate replace to="/" />;
  const { product } = location;

  const handleOrder = (e) => {
    e.preventDefault();
    ordersapi
      .post("/", {
        firstName: firstName,
        lastName: LastName,
        email: email,
        phone: phone,
        address: address,
        appartment: appartment,
        city: city,
        total: product.price,
        product: product._id,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="checkout-container">
      <div className="checkout-title">
        <img src={polygon} className="checkout-img" alt="checkout title" />
        <h1>Checkout</h1>
      </div>
      <div className="checkout-product">
        <div className="product-img">
          <img
            src={"http://localhost:5000/images/" + product.image}
            alt="checkout product"
          />
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>
          <div className="product-desc">
            <h4>Description</h4>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <form className="checkout-form" onSubmit={handleOrder}>
        <div className="checkout-form-inputs">
          <div className="checkout-form-container">
            <h2>Contact information</h2>
            <div className="checkout-doubleInput">
              <input
                required
                className=""
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
              <input
                required
                className=""
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </div>
            <div className="checkout-singleInput">
              <input
                required
                className=""
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="checkout-singleInput">
              <input
                required
                className=""
                type="text"
                placeholder="Phone number"
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="checkout-form-container">
            <h2>Shippement address</h2>
            <div className="checkout-singleInput">
              <input
                required
                className=""
                type="text"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              ></input>
            </div>
            <div className="checkout-singleInput">
              <input
                required
                className=""
                type="text"
                placeholder="Appartement, building, etc."
                onChange={(e) => setAppartment(e.target.value)}
              ></input>
            </div>
            <div className="checkout-singleInput">
              <input
                required
                className=""
                type="text"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
        <div className="checkout-total">
          <h2>Total Amount:</h2>
          <h3>{product.price.toFixed(2)} USD</h3>
          <button className="Checkout-button">Submit Order</button>
        </div>
      </form>
    </div>
  );
}
