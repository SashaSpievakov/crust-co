import React from "react";
import { Link } from "react-router-dom";

import cartImg from "../assets/img/empty-cart.png";
import { ButtonBlack } from "./Buttons/Buttons.styled";

const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>Your cart is empty <span>😕</span></h2>
      <p>
        You haven't ordered food yet.<br />
        If you want to make an order go back to the main page.
      </p>
      <img src={cartImg} alt="empty cart" />
      <ButtonBlack to="/" as={Link}>
        <span>Go Back</span>
      </ButtonBlack>
    </div>
  )
}
export default CartEmpty;