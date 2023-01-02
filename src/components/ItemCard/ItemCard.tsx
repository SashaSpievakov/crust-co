import { useState } from "react";
import { Link } from "react-router-dom";

import ItemsCountHandler from "../UI/ItemsCountHandler/ItemsCountHandler";
import Select from "../UI/Selector/Selector";
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
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);

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
      <Select
        sizes={sizes}
        types={types}
        activeSize={activeSize}
        activeType={activeType}
        setActiveSize={setActiveSize}
        setActiveType={setActiveType}
        typeNames={typeNames}
      />
      <Bottom>
        <Price>{price}$</Price>
        <ItemsCountHandler
          id={id}
          name={name}
          price={price}
          activeSize={activeSize}
          activeType={activeType}
          typeNames={typeNames}
        />
      </Bottom>
    </Block>
  );
};

export default ItemCard;
