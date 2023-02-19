import { Link } from 'react-router-dom';
import { shallowEqual } from 'react-redux';

import { clearCart } from '../../store/slices/cart/reducer/cartReducer';
import { selectCart } from '../../store/slices/cart/selectors/selectCart/selectCart';
import CartItem from '../../components/CartItem/CartItem';
import CartEmpty from '../../components/CartEmpty/CartEmpty';
import { ButtonBackCart, ButtonPay } from '../../styles/Buttons.styled';
import {
  Article,
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
    dispatch(clearCart());
  };

  return items.length ? (
    <Article>
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
          <ButtonBackCart to="/" as={Link}>
            <ChevronLeft />
            <span>Go back</span>
          </ButtonBackCart>
          <ButtonPay>
            <span>Buy now</span>
          </ButtonPay>
        </Buttons>
      </Bottom>
    </Article>
  ) : (
    <CartEmpty />
  );
};

export default Cart;
