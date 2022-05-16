import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashboardProductItem from "./DashboardProductItem";
import "../Css/DashboardProducts.css";
import api from "../api/api";

export default class DashboardProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      products: [],
    };
    this.getProducts();
  }
  getProducts = () => {
    api
      .get("/", {
        params: {
          page: 1,
          limit: 0,
        },
      })
      .then((res) => {
        this.setState({
          products: res.data.response.docs,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <br />
        <Link className="Dashboard--addProduct" to="addProduct">
          add +
        </Link>
        <div className="Dashboard--Products">
          {this.state.products.map((product) => {
            return <DashboardProductItem product={product} />;
          })}
        </div>
      </>
    );
  }
}
