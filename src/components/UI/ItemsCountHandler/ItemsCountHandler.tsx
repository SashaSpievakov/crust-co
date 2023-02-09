import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { ICartItem } from '../../../models/ICartItem';
import { ItemsCountHandlerProps } from '../../../models/ItemsCountHandlerProps';
import {
  addItem,
  removeItem,
  selectItemPriceById,
} from '../../../store/slices/cartSlice';
import { ButtonAdd } from '../../../styles/Buttons.styled';
import {
  Counter,
  Minus,
  Count,
  Plus,
  MainPlus,
} from './ItemsCountHandler.styled';

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
  const namesCount = useAppSelector(selectItemPriceById(id));

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
      <Minus onClick={onClickRemove} data-testid="itemsHandlerMinus" />
      <Count isFullScreen={isFullScreen}>{namesCount}</Count>
      <Plus onClick={onClickAdd} data-testid="itemsHandlerPlus" />
    </Counter>
  ) : (
    <ButtonAdd onClick={onClickAdd} isFullScreen={isFullScreen}>
      <MainPlus />
      <span>Add</span>
    </ButtonAdd>
  );
};

export default ItemsCountHandler;
