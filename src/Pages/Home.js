import React, { Component } from "react";
import Promo from "../Components/Promo";
import Newproducts from "../Components/Newproducts";
import Partners from "../Components/Partners";
import ProductList from "../Components/ProductList";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import api from "../api/api";

function sliceIntoChunks(arr, chunksize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunksize) {
    const chunk = arr.slice(i, i + chunksize);
    res.push(chunk);
  }
  return res;
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      products: [],
      currentPage: 1,
      itemPerList: 5, // in each list (home page 5)
      itemsPerPage: 10, //how many item in a page
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

  render() {
    return (
      <>
        <Header></Header>
        <Promo />
        <Newproducts />
        <h1 id="latest-product-text">Latest products</h1>
        {this.state.products.map((list) => {
          return <ProductList list={list} />;
        })}
        <Partners />
        <Footer></Footer>
      </>
    );
  }
}

export default Home;
