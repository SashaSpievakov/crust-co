import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { ICartItem } from "../../../models/ICartItem";
import {
  addItem,
  CartItemForDelete,
  removeItem,
  selectCartItemById,
} from "../../../store/slices/cartSlice";
import { ButtonAdd } from "../../../styles/Buttons.styled";
import {
  Counter,
  Minus,
  Count,
  Plus,
  MainPlus,
} from "./ItemsCountHandler.styled";

interface ItemsCountHandlerProps {
  id: string;
  name: string;
  price: number;
  activeSize: number;
  activeType: number;
  typeNames: string[];
  isFullScreen?: boolean;
}

const sizeNames: number[] = [12, 14, 16];

const ItemsCountHandler = ({
  id,
  name,
  price,
  activeSize,
  activeType,
  typeNames,
  isFullScreen = false,
}: ItemsCountHandlerProps) => {
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector(selectCartItemById(id));

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
    };

    dispatch(removeItem(item));
  };

  return addedCount ? (
    <Counter isFullScreen={isFullScreen}>
      <Minus onClick={onClickRemove} />
      <Count isFullScreen={isFullScreen}>{addedCount}</Count>
      <Plus onClick={onClickAdd} />
    </Counter>
  ) : (
    <ButtonAdd onClick={onClickAdd} isFullScreen={isFullScreen}>
      <MainPlus />
      <span>Add</span>
    </ButtonAdd>
  );
};
export default ItemsCountHandler;
