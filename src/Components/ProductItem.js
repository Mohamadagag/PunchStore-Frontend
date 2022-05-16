import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  return (
    <div>
      <div className="product-item">
        <Link to={"/checkout"} state={{ product: product }}>
          <img
            src={"http://localhost:5000/images/" + product.image}
            alt="Product "
            className="product-item-img"
          />
        </Link>
        <p>{product.name}</p>
        <p>{product.price} $</p>
      </div>
    </div>
  );
}
