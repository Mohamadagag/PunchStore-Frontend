import React from "react";
import "../Css/DashboardProductItem.css";
import api from "../api/api";

function DashboardProductItem({ product }) {
  const deleteItem = () => {
    api
      .delete("/" + product._id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="Dashboard--ProductItem">
      <img
        src={"http://localhost:5000/images/" + product.image}
        alt="Product "
        className="product-item-img"
      />
      <p>{product.name}</p>
      <p>{product.price} $</p>
      <div className="Dashboard--product-buttons">
        <button>edit</button>
        <button onClick={deleteItem}>delete</button>
      </div>
    </div>
  );
}

export default DashboardProductItem;
