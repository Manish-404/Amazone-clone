import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Storage/September/New/SSD_1500x300px-Desktop_Creatives_COuponOffers_9thMar2021_V1-Live.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout_title">Your Shopping Basket🛒</h2>
          {/* basketItem */}
          {/* basketItem */}
          {/* basketItem */}
          {/* basketItem */}
        </div>
      </div>
      <div className="checkout_right">
          <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
