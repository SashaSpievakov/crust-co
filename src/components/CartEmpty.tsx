import React from "react";
import { Link } from "react-router-dom";

import cartImg from "../assets/img/empty-cart.png";

const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>Your cart is empty <span>😕</span></h2>
      <p>
        You haven't ordered food yet.<br />
        If you want to make an order go back to the main page.
      </p>
      <img src={cartImg} alt="empty cart" />
      <Link to="/" className="button button--black">
        <span>Go Back</span>
      </Link>
    </div>
  )
}
export default CartEmpty;