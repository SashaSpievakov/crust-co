import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Image, Title, Paragraph, Price, Item } from './FullItemBlock.styled';
import { ButtonBlack } from '../../styles/Buttons.styled';
import Selector from '../UI/Selector/Selector';
import ItemsCountHandler from '../UI/ItemsCountHandler/ItemsCountHandler';
import { IPizzaItem } from '../../models/IPizzaItem';

interface FullItemProps {
  item: IPizzaItem;
}

export const typeNames: string[] = ['traditional', 'thin'];

const FullItemBlock = ({ item }: FullItemProps) => {
  const [activePrice, setActivePrice] = useState<number>(item.price);
  const [activeSize, setActiveSize] = useState<number>(12);
  const [activeType, setActiveType] = useState<number>(0);

  return (
    <Item>
      <Image
        src={`../assets/img/pizza${item.id}.png`}
        alt="pizza"
        width="450"
        height="450"
      />
      <Title>{item.name}</Title>
      <Paragraph>{item.description}</Paragraph>
      <Selector
        price={activePrice}
        sizes={item.sizes}
        types={item.types}
        activeSize={activeSize}
        activeType={activeType}
        setActivePrice={setActivePrice}
        setActiveSize={setActiveSize}
        setActiveType={setActiveType}
        typeNames={typeNames}
        isFullScreen
      />
      <Price>{activePrice}$</Price>
      <ItemsCountHandler
        id={item.id}
        name={item.name}
        price={activePrice}
        activeSize={activeSize}
        activeType={activeType}
        typeNames={typeNames}
        isFullScreen
      />
      <ButtonBlack to="/" as={Link}>
        <span>Go Back</span>
      </ButtonBlack>
    </Item>
  );
};

export default FullItemBlock;
