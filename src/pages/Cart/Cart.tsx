import { Link } from 'react-router-dom';
import { shallowEqual } from 'react-redux';

import { clearItems, selectCart } from '../../store/slices/cartSlice';
import CartItem from '../../components/CartItem/CartItem';
import CartEmpty from '../../components/CartEmpty/CartEmpty';
import { ButtonBack, ButtonPay } from '../../styles/Buttons.styled';
import {
  Top,
  Title,
  CartIcon,
  Clear,
  Trash,
  Bottom,
  Details,
  Buttons,
  ChevronLeft,
} from './Cart.styled';
import { ICartItem } from '../../models/ICartItem';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

const Cart = () => {
  const { itemsCount, totalPrice, items } = useAppSelector(
    selectCart,
    shallowEqual,
  );
  const dispatch = useAppDispatch();

  const onClearClick = () => {
    dispatch(clearItems());
  };

  return (
    <div>
      {items.length ? (
        <>
          <Top>
            <Title>
              <CartIcon />
              Cart
            </Title>
            <Clear onClick={onClearClick}>
              <Trash />
              <span role="presentation">Delete all items</span>
            </Clear>
          </Top>

          <section>
            {items.map((item: ICartItem) => (
              <CartItem key={item.name + item.type + item.size} {...item} />
            ))}
          </section>

          <Bottom>
            <Details>
              <span>
                {' '}
                Items <b data-testid="cartPageItemsCount">{itemsCount}</b>{' '}
              </span>
              <span>
                {' '}
                Total <b data-testid="cartPageItemsPrice">{totalPrice}$</b>{' '}
              </span>
            </Details>
            <Buttons>
              <ButtonBack to="/" as={Link}>
                <ChevronLeft />
                <span>Go Back</span>
              </ButtonBack>
              <ButtonPay>
                <span>Buy now</span>
              </ButtonPay>
            </Buttons>
          </Bottom>
        </>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};

export default Cart;
