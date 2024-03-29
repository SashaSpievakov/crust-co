import { FC, KeyboardEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { ICartItem } from '../../models';
import {
  addItem,
  removeItem,
} from '../../store/slices/cart/reducer/cartReducer';
import { selectCurrentItemCount } from '../../store/slices/cart/selectors/selectCurrentItemCount/selectCurrentItemCount';
import { selectItemsCount } from '../../store/slices/cart/selectors/selectItemsCount/selectItemsCount';
import { ButtonAdd } from '../../styles/Buttons.styled';
import { IItemsCountHandler } from './IItemsCountHandler.type';
import {
  Count,
  Counter,
  MainPlus,
  Minus,
  Plus,
} from './ItemsCountHandler.styled';

export const ItemsCountHandler: FC<IItemsCountHandler> = ({
  id,
  name,
  price,
  activeSize,
  activeType,
  typeNames,
  isFullScreen = false,
}) => {
  const dispatch = useAppDispatch();
  const namesCount = useAppSelector(selectItemsCount(id));
  const currentItemCount = useAppSelector(
    selectCurrentItemCount(name, activeSize, typeNames[activeType]),
  );

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
    if (currentItemCount < 1) return;

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

  const handleAddKeyDownClick = (e: KeyboardEvent<SVGElement>) => {
    if (e.code === 'Enter') onClickAdd();
  };

  const handleRemoveKeyDownClick = (e: KeyboardEvent<SVGElement>) => {
    if (e.code === 'Enter') onClickRemove();
  };

  return namesCount ? (
    <Counter isFullScreen={isFullScreen}>
      <Minus
        onClick={onClickRemove}
        onKeyDown={(e) => handleRemoveKeyDownClick(e)}
        tabIndex={currentItemCount < 1 ? -1 : 0}
        disabled={currentItemCount < 1}
        data-testid="itemsHandlerMinus"
      />
      <Count isFullScreen={isFullScreen}>{namesCount}</Count>
      <Plus
        onClick={onClickAdd}
        onKeyDown={(e) => handleAddKeyDownClick(e)}
        tabIndex={0}
        data-testid="itemsHandlerPlus"
      />
    </Counter>
  ) : (
    <ButtonAdd onClick={onClickAdd} isFullScreen={isFullScreen}>
      <MainPlus />
      <span>Add</span>
    </ButtonAdd>
  );
};
