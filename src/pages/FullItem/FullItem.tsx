import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import itemAPI from "../../services/ItemService";
import { Image, Title, Paragraph, Price, Item } from "./FullItem.styled";
import { ButtonBlack } from "../../styles/Buttons.styled";
import Selector from "../../components/UI/Selector/Selector";
import ItemsCountHandler from "../../components/UI/ItemsCountHandler/ItemsCountHandler";

const typeNames: string[] = ["traditional", "thin"];

const FullItem = () => {
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const { id } = useParams();
  const {
    data: item,
    isLoading,
    isSuccess,
    error,
  } = itemAPI.useFetchItemQuery(id as string, {
    refetchOnFocus: true,
  });

  return isSuccess ? (
    <Item>
      <Image src={`../assets/img/pizza${item.id}.png`} alt="pizza" />
      <Title>{item.name}</Title>
      <Paragraph>{item.description}</Paragraph>
      <Selector
        sizes={item.sizes}
        types={item.types}
        activeSize={activeSize}
        activeType={activeType}
        setActiveSize={setActiveSize}
        setActiveType={setActiveType}
        typeNames={typeNames}
        isFullScreen
      />
      <Price>{item.price}$</Price>
      <ItemsCountHandler
        id={item.id}
        name={item.name}
        price={item.price}
        activeSize={activeSize}
        activeType={activeType}
        typeNames={typeNames}
        isFullScreen
      />
      <ButtonBlack to="/" as={Link}>
        <span>Go Back</span>
      </ButtonBlack>
    </Item>
  ) : isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <h2>Eroor: {JSON.stringify(error)}</h2>
  );
};
export default FullItem;
