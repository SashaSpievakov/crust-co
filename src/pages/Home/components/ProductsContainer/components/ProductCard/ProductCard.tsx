import { FC, useEffect, useState } from 'react';

import {
  ItemsCountHandler,
  ProductOptions,
} from '../../../../../../components';
import { typeNames } from '../../../../../Pizza/FullProduct/FullProduct';
import {
  Block,
  Bottom,
  CustomLink,
  Image,
  Price,
  Title,
} from './ProductCard.styled';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  sizes: number[];
  types: number[];
}

export const ProductCard: FC<ProductCardProps> = ({
  id,
  name,
  price,
  sizes,
  types,
}) => {
  const [activePrice, setActivePrice] = useState<number>(price);
  const [activeSize, setActiveSize] = useState<number>(sizes[0]);
  const [activeType, setActiveType] = useState<number>(0);

  useEffect(() => {
    setActivePrice(price);
  }, [sizes]);

  return (
    <Block>
      <CustomLink to={`/pizzas/${name}`}>
        <picture>
          <source
            srcSet={`./assets/img/pizzas/pizza${id}.webp`}
            type="image/webp"
          />
          <source
            srcSet={`./assets/img/pizzas/pizza${id}.png`}
            type="image/png"
          />
          <Image
            src={`./assets/img/pizzas/pizza${id}.png`}
            alt={`${name} pizza`}
            width="250"
            height="250"
          />
        </picture>
        <Title>{name}</Title>
      </CustomLink>
      <ProductOptions
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
