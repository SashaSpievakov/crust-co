import { memo } from "react";
import { BsDashLg, BsPlusLg } from "react-icons/bs";

import { addItem, removeItem, removeItems } from "../../store/slices/cartSlice";
import { ButtonCircle } from "../../styles/Buttons.styled";
import {
  Article,
  ImgWrapper,
  InfoWrapper,
  Counter,
  CountIcon,
  Price,
  Remove,
} from "./CartItem.styled";
import { ICartItem } from "../../models/ICartItem";
import { useAppDispatch } from "../../hooks/reduxHooks";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  size: number;
  type: string;
  count: number;
}

const CartItem = memo(
  ({ id, name, price, size, type, count }: CartItemProps) => {
    const dispatch = useAppDispatch();

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
          <img
            src={`./assets/img/pizza${id}.png`}
            alt="Pizza"
            width="80"
            height="80"
          />
        </ImgWrapper>
        <InfoWrapper>
          <h3>{name}</h3>
          <p>
            {type} dough, {size} inch
          </p>
        </InfoWrapper>
        <Counter>
          <ButtonCircle disabled={count === 1} onClick={onClickRemove}>
            <CountIcon as={BsDashLg} />
          </ButtonCircle>
          <b>{count}</b>
          <ButtonCircle onClick={onClickAdd}>
            <CountIcon as={BsPlusLg} />
          </ButtonCircle>
        </Counter>
        <Price>
          <b>{price * count}$</b>
        </Price>
        <Remove>
          <ButtonCircle onClick={onClickDelete} remove>
            <CountIcon as={BsPlusLg} />
          </ButtonCircle>
        </Remove>
      </Article>
    );
  },
);
export default CartItem;
