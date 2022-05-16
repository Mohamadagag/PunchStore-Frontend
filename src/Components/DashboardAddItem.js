import React, { useState } from "react";
import "../Css/DashboardAddItem.css";
import api from "../api/api";

function DashboardAddItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState(null);

  const addItem = (e) => {
    e.preventDefault();
    console.log("err");
    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("price", price);
    data.append("quantity", quantity);
    data.append("image", image);

    api
      .post("/", data)
      .then((response) => {
        alert("product added successfully");
      })
      .catch((err) => {
        alert("product not added");
      });
  };
  return (
    <div>
      <form className="Dashboard--additemForm" onSubmit={addItem}>
        <input
          required
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <textarea
          required
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <input
          required
          type="number"
          placeholder="Price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <input
          required
          type="number"
          placeholder="Quantity"
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        ></input>
        <input
          required
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        ></input>
        <button type="submit">add product</button>
      </form>
    </div>
  );
}

export default DashboardAddItem;
