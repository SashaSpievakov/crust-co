import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";

import { addItem, removeItem, selectCartItemById } from "../../redux/slices/cartSlice";
import styles from "./styles.module.scss";

const typeNames = ['traditional', 'thin'];
const sizeNames = [12, 14, 16];

const ItemCard = ({ id, name, imageUrl, price, sizes, types, count }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const refType = useRef();

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      name,
      price,
      imageUrl,
      size: sizeNames[activeSize],
      type: typeNames[activeType]
    };
    dispatch(addItem(item));
  }

  const onClickRemove = () => {
    const item = {
      id, price, count
    };
    dispatch(removeItem(item));
  }

  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map(type => (
            <li
              ref={refType}
              key={type}
              className={activeType === types.indexOf(type) ? "active" : ""}
              onClick={() => setActiveType(type)}
            >
              {typeNames[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              key={size}
              className={activeSize === i ? "active" : ""}
              onClick={() => setActiveSize(i)}
            >
            {size} inch
          </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{price}$</div>
        {addedCount ? (
          <div className={styles.button__wrap}>
            <HiMinus className={styles.minus} onClick={onClickRemove} />
            <span className={styles.count}>{addedCount}</span>
            <HiPlus className={styles.plus} onClick={onClickAdd} />
          </div>
        ) : (
          <button
            className="button button--outline button--add"
            onClick={onClickAdd}
          >
          <BsPlusLg className="button--plus" />
          <span>Add</span>
        </button>
        )}
      </div>
    </div>
  )
}
export default ItemCard