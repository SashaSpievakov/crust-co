import { useState } from 'react';

import { IPizzaItem } from '../../models';
import ItemsCountHandler from '../ItemsCountHandler/ItemsCountHandler';
import Selector from '../Selector/Selector';
import { ButtonLink } from '../UI';
import { Image, Item, Paragraph, Price, Title } from './FullItemBlock.styled';

interface FullItemProps {
  item: IPizzaItem;
}

export const typeNames: string[] = ['traditional', 'thin'];

const FullItemBlock = ({ item }: FullItemProps) => {
  const [activePrice, setActivePrice] = useState<number>(item.price);
  const [activeSize, setActiveSize] = useState<number>(12);
  const [activeType, setActiveType] = useState<number>(0);

  return (
    <Item data-testid="itemPage">
      <picture>
        <source
          srcSet={`../assets/img/pizza${item.id}.webp`}
          type="image/webp"
        />
        <source srcSet={`../assets/img/pizza${item.id}.png`} type="image/png" />
        <Image
          src={`../assets/img/pizza${item.id}.png`}
          alt={`${item.name} pizza`}
          width="450"
          height="450"
        />
      </picture>
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
      <ButtonLink link="/">Go Back</ButtonLink>
    </Item>
  );
};

export default FullItemBlock;
