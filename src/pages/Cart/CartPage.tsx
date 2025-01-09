import { FC, KeyboardEvent, useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { ICartItem } from '../../models';
import { clearCart } from '../../store';
import { selectCart } from '../../store/slices/cart/selectors/selectCart/selectCart';
import { ButtonBackCart, ButtonPay } from '../../styles/Buttons.styled';
import {
  Article,
  Bottom,
  Buttons,
  CartIcon,
  ChevronLeft,
  Clear,
  DeleteText,
  Details,
  Title,
  Top,
  Trash,
} from './CartPage.styled';
import { CartEmpty, CartItem, OrderModal } from './components';

export const CartPage: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
          <DeleteText role="presentation">Delete all items</DeleteText>
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
          {isOpen && <OrderModal setIsOpen={setIsOpen} />}
        </Buttons>
      </Bottom>
    </Article>
  ) : (
    <CartEmpty />
  );
};
