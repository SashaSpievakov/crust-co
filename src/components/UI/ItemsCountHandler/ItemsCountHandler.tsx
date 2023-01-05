import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { ICartItem } from "../../../models/ICartItem";
import {
  addItem,
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
  const namesCount = useAppSelector(selectCartItemById(id));

  const onClickAdd = () => {
    const item: ICartItem = {
      id,
      name,
      price,
      size: activeSize,
      type: typeNames[activeType],
      count: 0,
    };

    dispatch(addItem(item));
  };

  const onClickRemove = () => {
    const item: ICartItem = {
      id,
      name,
      price,
      size: activeSize,
      type: typeNames[activeType],
      count: 0,
    };

    dispatch(removeItem(item));
  };

  return namesCount ? (
    <Counter isFullScreen={isFullScreen}>
      <Minus onClick={onClickRemove} />
      <Count isFullScreen={isFullScreen}>{namesCount}</Count>
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
