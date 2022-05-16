import React from "react";
import "../Css/Aboutus.css";
import aboutus from "../Images/aboutus.svg";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function contactUs() {
  return (
    <>
      <Header />
      <div className="container">
        <img src={aboutus} alt="About us logo" id="aboutus-img" />
        <p>
          Welcome to punch store, your number one source for all Gaming related
          products. We're dedicated to providing you the very best gadgets, with
          an emphasis on Pc parts, Accessories and consoles.
        </p>
        <p>
          We hope you enjoy our products as much as we enjoy offering them to
          you. If you have any questions or comments, please don't hesitate to
          contact us.
        </p>
      </div>
      <Footer />
    </>
  );
}
