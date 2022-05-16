import React, { Component } from "react";
import Polygon from "../Images/Polygon.svg";
import ProductList from "../Components/ProductList";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Css/Products.css";
import api from "../api/api";

function sliceIntoChunks(arr, chunksize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunksize) {
    const chunk = arr.slice(i, i + chunksize);
    res.push(chunk);
  }
  return res;
}

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      products: [],
      currentPage: 1,
      itemPerList: 5,
      itemsPerPage: 10,
      NumberOfPages: 0,
    };
    this.getProducts();
  }

  getProducts = () => {
    api
      .get("/", {
        params: {
          page: this.state.currentPage,
          limit: this.state.itemsPerPage,
        },
      })
      .then((res) => {
        this.setState({
          products: sliceIntoChunks(
            res.data.response.docs,
            this.state.itemPerList
          ),
          NumberOfPages: res.data.response.pages,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  nextPage = async (e) => {
    if (this.state.currentPage < this.state.NumberOfPages) {
      await this.setState({ currentPage: this.state.currentPage + 1 });
      this.getProducts();
    }
  };
  previousPage = async (e) => {
    await this.setState({ currentPage: this.state.currentPage - 1 });
    this.getProducts();
  };

  render() {
    return (
      <>
        <Header />
        <div className="product-text">
          <h1>Products</h1>
          <img src={Polygon} alt="Polygon " id="Polygon" />
        </div>
        {this.state.products.map((list) => {
          return <ProductList list={list} />;
        })}
        <div className="product-paginationButtons">
          <button onClick={this.previousPage}>previous</button>
          <button onClick={this.nextPage}>next</button>
        </div>

        <Footer />
      </>
    );
  }
}

export default Products;
