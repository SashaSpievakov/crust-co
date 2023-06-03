import { KeyboardEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { shallowEqual } from 'react-redux';

import Modal from 'src/components/OrderModal/OrderModal';
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
  const [isOpen, setIsOpen] = useState(false);
  const { itemsCount, totalPrice, items } = useAppSelector(
    selectCart,
    shallowEqual,
  );
  const dispatch = useAppDispatch();

  const onClearClick = () => {
    dispatch(clearCart());
  };

  const handleClearKeyDownClick = (e: KeyboardEvent<HTMLElement>) => {
    if (e.code === 'Enter') onClearClick();
  };

  useEffect(() => {
    document.title = 'Crust & Co. | Cart';
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, [isOpen]);

  return items.length ? (
    <Article>
      <Top>
        <Title>
          <CartIcon />
          Cart
        </Title>
        <Clear
          onClick={onClearClick}
          onKeyDown={(e) => handleClearKeyDownClick(e)}
          tabIndex={0}
        >
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
          <ButtonPay onClick={() => setIsOpen(true)}>
            <span>Buy now</span>
          </ButtonPay>
          {isOpen && <Modal setIsOpen={setIsOpen} />}
        </Buttons>
      </Bottom>
    </Article>
  ) : (
    <CartEmpty />
  );
};

export default Cart;
