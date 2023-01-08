import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ItemsCountHandler from "../UI/ItemsCountHandler/ItemsCountHandler";
import Selector from "../UI/Selector/Selector";
import { Block, Image, Title, Bottom, Price } from "./ItemCard.styled";

interface ItemCardProps {
  id: string;
  name: string;
  price: number;
  sizes: number[];
  types: number[];
}

const typeNames: string[] = ["traditional", "thin"];

const ItemCard = ({ id, name, price, sizes, types }: ItemCardProps) => {
  const [activePrice, setActivePrice] = useState<number>(price);
  const [activeSize, setActiveSize] = useState<number>(sizes[0]);
  const [activeType, setActiveType] = useState<number>(0);

  useEffect(() => {
    setActivePrice(price);
  }, [sizes]);

  return (
    <Block>
      <Link to={`/item/${id}`}>
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
      </Link>
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
