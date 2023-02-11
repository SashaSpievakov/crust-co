import { Link } from 'react-router-dom';

import cartImg from '../../assets/img/empty-cart.png';
import { ButtonBlack } from '../../styles/Buttons.styled';
import { Section } from './CartEmpty.styled';

const CartEmpty = () => {
  return (
    <Section>
      <h2>
        Your cart is empty <span>😕</span>
      </h2>
      <p>
        You haven&apos;t ordered food yet.
        <br />
        If you want to make an order, go back to the main page.
      </p>
      <img src={cartImg} alt="empty cart" width="300" height="255" />
      <ButtonBlack as={Link} to="/">
        <span>Go Back</span>
      </ButtonBlack>
    </Section>
  );
};

export default CartEmpty;
