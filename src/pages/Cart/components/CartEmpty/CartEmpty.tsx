import { FC } from 'react';

import { ButtonLink } from '@src/components/UI';

import { Article } from './CartEmpty.styled';
import cartImg from './images/empty-cart.png';

export const CartEmpty: FC = () => {
  return (
    <Article>
      <h2>
        Your cart is empty <span>😕</span>
      </h2>
      <p>
        You haven&apos;t ordered food yet.
        <br />
        If you want to make an order, go back to the main page.
      </p>
      <img src={cartImg} alt="empty cart" width="300" height="255" />
      <ButtonLink link="/">Go Back</ButtonLink>
    </Article>
  );
};
