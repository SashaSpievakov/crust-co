import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";

import { addItem, ICartItem, CartItemForDelete, removeItem, selectCartItemById } from "../../redux/slices/cartSlice";
import { Block, Active, Image, Title, Selector, Bottom, Price, Counter, Minus, Plus, Count } from "./ItemCard.styled";

interface ItemCardProps {
  id: string,
  name: string,
  price: number,
  sizes: number[],
  types: number[],
  count: number,
  imageUrl: string
}

const typeNames: string[] = ['traditional', 'thin'];
const sizeNames: number[] = [12, 14, 16];

const ItemCard: React.FC<ItemCardProps> = ({ id, name, imageUrl, price, sizes, types, count }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const refType = useRef<HTMLLIElement>(null);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: ICartItem = {
      id,
      name,
      price,
      imageUrl,
      size: sizeNames[activeSize],
      type: typeNames[activeType],
      count: 0,
    };
    dispatch(addItem(item));
  }

  const onClickRemove = () => {
    const item: CartItemForDelete = {
      id,
      price,
      count,
    };
    dispatch(removeItem(item));
  }

  return (
    <Block>
      <Link to={`/item/${id}`}>
        <Image
          src={imageUrl}
          alt="Pizza"
        />
        <Title>{name}</Title>
      </Link>
      <Selector>
        <ul>
          {types.map(type => (
            activeType === types.indexOf(type) ? (
              <Active
              ref={refType}
              key={type}
              onClick={() => setActiveType(type)}
              >
                {typeNames[type]}
              </Active>
            ) : (
              <li
              ref={refType}
              key={type}
              onClick={() => setActiveType(type)}
              >
                {typeNames[type]}
              </li>
            )
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            activeSize === i ? (
              <Active
              key={size}
              onClick={() => setActiveSize(i)}
              >
                {size} inch
              </Active>
            ) : (
              <li
              key={size}
              onClick={() => setActiveSize(i)}
              >
                {size} inch
              </li>
            )
          ))}
        </ul>
      </Selector>
      <Bottom>
        <Price>{price}$</Price>
        {addedCount ? (
          <Counter>
            <Minus onClick={onClickRemove} />
            <Count>{addedCount}</Count>
            <Plus onClick={onClickAdd} />
          </Counter>
        ) : (
          <button
            className="button button--outline button--add"
            onClick={onClickAdd}
          >
          <BsPlusLg className="button--plus" />
          <span>Add</span>
        </button>
        )}
      </Bottom>
    </Block>
  )
}
export default ItemCard