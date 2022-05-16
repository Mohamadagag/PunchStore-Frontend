import React from "react";
import { Link } from "react-router-dom";
import Laptop from "../Images/Laptop.svg";
import "../Css/ProductEdit.css";
import "../Css/App.css";
import Dashboard from "./Dashboard";

function ProductEditDelete({ description, price }) {
  return (
    <div>
      <Dashboard />
      <div className="product-edit-delete">
        <div className="product-item">
          <Link to="/checkout">
            <img src={Laptop} alt="Product " id="product-item-img" />
          </Link>
          <p>{description}</p>
          <p>{price} $</p>
        </div>
        <div className="addEdit">
          <button>
            <Link to="/edit">Edit</Link>
          </button>
          <button>
            <Link to="/contact">Delete</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductEditDelete;
