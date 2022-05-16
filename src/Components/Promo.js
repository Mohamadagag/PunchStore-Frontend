import React from "react";
import ps4 from "../Images/ps4.svg";

export default function Promo() {
  return (
    <div className="promo-area">
      <img src={ps4} alt="Dual shock 4" id="ps4" />
      <div className="promo-area-text">
        <h1>BUILT FOR GAMERS</h1>
        <h2>INTRODUCING DUAL SHOCK 4.THE MOST POWERFUL GAMING CONSOLE.</h2>
      </div>
    </div>
  );
}
