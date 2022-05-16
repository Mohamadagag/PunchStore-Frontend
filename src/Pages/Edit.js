import React from "react";
import "../Css/Edit.css";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

function productDashboard({ description, price }) {
  return (
    <div>
      <Dashboard />
      <div className="EditPage">
        <div className="product-item">
          <form className="EditForm">
            <input type="text" placeholder="Enter new Description"></input>
            <br />
            <input type="text" placeholder="Enter new Price"></input>
          </form>
        </div>

        <div className="save">
          <button>
            <Link to="/productEditDelete">save</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default productDashboard;
