import { Link } from "react-router-dom";

import cartImg from "../../assets/img/empty-cart.png";
import { ButtonBlack } from "../Buttons/Buttons.styled";
import Article from "./CartEmpty.styled";

const CartEmpty = () => {
  return (
    <Article>
      <h2>
        Your cart is empty <span>😕</span>
      </h2>
      <p>
        You haven&apos;t ordered food yet.
        <br />
        If you want to make an order go back to the main page.
      </p>
      <img src={cartImg} alt="empty cart" />
      <ButtonBlack to="/" as={Link}>
        <span>Go Back</span>
      </ButtonBlack>
    </Article>
  );
};

export default CartEmpty;
