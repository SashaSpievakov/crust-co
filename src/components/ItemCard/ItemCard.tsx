import { useEffect, useState } from 'react';

import { typeNames } from '../FullItemBlock/FullItemBlock';
import ItemsCountHandler from '../ItemsCountHandler/ItemsCountHandler';
import Selector from '../Selector/Selector';
import {
  Block,
  Bottom,
  CustomLink,
  Image,
  Price,
  Title,
} from './ItemCard.styled';

interface ItemCardProps {
  id: string;
  name: string;
  price: number;
  sizes: number[];
  types: number[];
}

const ItemCard = ({ id, name, price, sizes, types }: ItemCardProps) => {
  const [activePrice, setActivePrice] = useState<number>(price);
  const [activeSize, setActiveSize] = useState<number>(sizes[0]);
  const [activeType, setActiveType] = useState<number>(0);

  useEffect(() => {
    setActivePrice(price);
  }, [sizes]);

  return (
    <Block>
      <CustomLink to={`/pizza/${name}`}>
        <picture>
          <source srcSet={`./assets/img/pizza${id}.webp`} type="image/webp" />
          <source srcSet={`./assets/img/pizza${id}.png`} type="image/png" />
          <Image
            src={`./assets/img/pizza${id}.png`}
            alt={`${name} pizza`}
            width="250"
            height="250"
          />
        </picture>
        <Title>{name}</Title>
      </CustomLink>
      <Selector
        price={activePrice}
        sizes={sizes}
        types={types}
        activeSize={activeSize}
        activeType={activeType}
        setActivePrice={setActivePrice}
        setActiveSize={setActiveSize}
        setActiveType={setActiveType}
        typeNames={typeNames}
      />
      <Bottom>
        <Price>{activePrice}$</Price>
        <ItemsCountHandler
          id={id}
          name={name}
          price={activePrice}
          activeSize={activeSize}
          activeType={activeType}
          typeNames={typeNames}
        />
      </Bottom>
    </Block>
  );
};

export default ItemCard;
