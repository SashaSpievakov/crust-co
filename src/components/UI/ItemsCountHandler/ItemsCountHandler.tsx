import { ButtonAdd } from "../../../styles/Buttons.styled";
import {
  Counter,
  Minus,
  Count,
  Plus,
  MainPlus,
} from "./ItemsCountHandler.styled";

interface ItemsCountHandlerProps {
  addedCount: number;
  onClickAdd: () => void;
  onClickRemove: () => void;
}

const ItemsCountHandler = ({
  addedCount,
  onClickAdd,
  onClickRemove,
}: ItemsCountHandlerProps) => {
  return addedCount ? (
    <Counter>
      <Minus onClick={onClickRemove} />
      <Count>{addedCount}</Count>
      <Plus onClick={onClickAdd} />
    </Counter>
  ) : (
    <ButtonAdd onClick={onClickAdd}>
      <MainPlus />
      <span>Add</span>
    </ButtonAdd>
  );
};
export default ItemsCountHandler;
