import React from "react";
import partner1 from "../Images/partner1.svg";
import partner2 from "../Images/partner2.svg";
import partner3 from "../Images/partner3.svg";

export default function Partners() {
  return (
    <div className="partners">
      <h1>Partners</h1>
      <div className="partner-img">
        <img src={partner1} alt="Product " id="partners" />
        <img src={partner2} alt="Product " id="partners" />
        <img src={partner3} alt="Product " id="partners" />
      </div>
    </div>
  );
}
