import { FC, useState } from 'react';

import { ItemsCountHandler, ProductOptions } from '@src/components';
import { ButtonLink } from '@src/components/UI';
import { IPizzaItem } from '@src/models';

import { Image, Item, Paragraph, Price, Title } from './FullProduct.styled';

interface FullProductProps {
  item: IPizzaItem;
}

export const typeNames: string[] = ['traditional', 'thin'];

export const FullProduct: FC<FullProductProps> = ({ item }) => {
  const [activePrice, setActivePrice] = useState<number>(item.price);
  const [activeSize, setActiveSize] = useState<number>(12);
  const [activeType, setActiveType] = useState<number>(0);

  return (
    <Item data-testid="itemPage">
      <picture>
        <source
          srcSet={`../assets/img/pizzas/pizza${item.id}.webp`}
          type="image/webp"
        />
        <source
          srcSet={`../assets/img/pizzas/pizza${item.id}.png`}
          type="image/png"
        />
        <Image
          src={`../assets/img/pizzas/pizza${item.id}.png`}
          alt={`${item.name} pizza`}
          width="450"
          height="450"
        />
      </picture>
      <Title>{item.name}</Title>
      <Paragraph>{item.description}</Paragraph>
      <ProductOptions
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
