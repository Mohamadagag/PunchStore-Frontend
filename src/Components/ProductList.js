import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList(props) {
  return (
    <div className="products">
      <div className="Product-list">
        {props.list.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  );
}
