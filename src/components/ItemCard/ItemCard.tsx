import { useState } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { ICartItem } from "../../models/ICartItem";
import {
  addItem,
  CartItemForDelete,
  removeItem,
  selectCartItemById,
} from "../../store/slices/cartSlice";
import ItemsCountHandler from "../UI/ItemsCountHandler/ItemsCountHandler";
import Select from "../UI/Selector/Selector";
import { Block, Image, Title, Bottom, Price } from "./ItemCard.styled";

interface ItemCardProps {
  id: string;
  name: string;
  price: number;
  sizes: number[];
  types: number[];
  count: number;
}

const typeNames: string[] = ["traditional", "thin"];
const sizeNames: number[] = [12, 14, 16];

const ItemCard = ({ id, name, price, sizes, types, count }: ItemCardProps) => {
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector(selectCartItemById(id));
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: ICartItem = {
      id,
      name,
      price,
      size: sizeNames[activeSize],
      type: typeNames[activeType],
      count: 0,
    };

    dispatch(addItem(item));
  };

  const onClickRemove = () => {
    const item: CartItemForDelete = {
      id,
      price,
      count,
    };

    dispatch(removeItem(item));
  };

  return (
    <Block>
      <Link to={`/item/${id}`}>
        <Image src={`./assets/img/pizza${id}.png`} alt="Pizza" />
        <Title>{name}</Title>
      </Link>
      <Select
        sizes={sizes}
        types={types}
        activeSize={activeSize}
        activeType={activeType}
        setActiveSize={setActiveSize}
        setActiveType={setActiveType}
        typeNames={typeNames}
      />
      <Bottom>
        <Price>{price}$</Price>
        <ItemsCountHandler
          addedCount={addedCount}
          onClickAdd={onClickAdd}
          onClickRemove={onClickRemove}
        />
      </Bottom>
    </Block>
  );
};

export default ItemCard;
