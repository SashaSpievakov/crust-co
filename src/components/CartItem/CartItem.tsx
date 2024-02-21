import { memo } from 'react';
import { BsDashLg, BsPlusLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../hooks';
import { ICartItem } from '../../models';
import {
  addItem,
  removeItem,
  removeItems,
} from '../../store/slices/cart/reducer/cartReducer';
import { ButtonCircle } from '../../styles/Buttons.styled';
import {
  Article,
  Counter,
  CountIcon,
  ImgWrapper,
  InfoWrapper,
  Price,
  Remove,
} from './CartItem.styled';

const CartItem = memo(({ id, name, price, size, type, count }: ICartItem) => {
  const dispatch = useAppDispatch();

  const onClickRemove = () => {
    const item: ICartItem = {
      id,
      name,
      price,
      size,
      type,
      count,
    };
    dispatch(removeItem(item));
  };

  const onClickAdd = () => {
    const item: ICartItem = {
      id,
      name,
      price,
      size,
      type,
      count,
    };
    dispatch(addItem(item));
  };

  const onClickDelete = () => {
    const item: ICartItem = {
      id,
      name,
      price,
      size,
      type,
      count,
    };
    dispatch(removeItems(item));
  };

  return (
    <Article>
      <ImgWrapper>
        <picture>
          <source srcSet={`./assets/img/pizza${id}.webp`} type="image/webp" />
          <source srcSet={`./assets/img/pizza${id}.png`} type="image/png" />
          <img
            src={`./assets/img/pizza${id}.png`}
            alt={`${name} pizza`}
            width="80"
            height="80"
          />
        </picture>
      </ImgWrapper>
      <InfoWrapper>
        <Link to={`/pizzas/${name}`}>{name}</Link>
        <p>
          {type} dough, {size} inch
        </p>
      </InfoWrapper>
      <Counter>
        <ButtonCircle
          disabled={count === 1}
          onClick={onClickRemove}
          aria-label="minus"
        >
          <CountIcon as={BsDashLg} />
        </ButtonCircle>
        <span>{count}</span>
        <ButtonCircle onClick={onClickAdd} aria-label="plus">
          <CountIcon as={BsPlusLg} />
        </ButtonCircle>
      </Counter>
      <Price>{price * count}$</Price>
      <Remove>
        <ButtonCircle onClick={onClickDelete} remove aria-label="delete">
          <CountIcon as={BsPlusLg} />
        </ButtonCircle>
      </Remove>
    </Article>
  );
});
export default CartItem;
