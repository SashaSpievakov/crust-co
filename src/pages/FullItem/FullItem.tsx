import { Link, useParams } from "react-router-dom";

import itemAPI from "../../services/ItemService";
import { Image, Title, Paragraph, Price, Item } from "./FullItem.styled";
import { ButtonBlack } from "../../styles/Buttons.styled";

const FullItem = () => {
  const { id } = useParams();
  const {
    data: item,
    isLoading,
    isSuccess,
    error,
  } = itemAPI.useFetchItemQuery(id as string);

  return isSuccess ? (
    <Item>
      <Image src={`../assets/img/pizza${item.id}.png`} alt="pizza" />
      <Title>{item.name}</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odit
        voluptates aliquid cupiditate reiciendis et mollitia minima aliquam a
        beatae, neque tempore necessitatibus commodi sunt minus. Expedita,
        voluptatum, dignissimos fugiat, neque maxime eaque modi eum officiis
        illo molestiae fugit? Inventore quod cumque laboriosam reprehenderit,
        odit quis error eius consequatur itaque totam nobis corporis incidunt
        amet placeat consectetur magnam aspernatur modi?
      </Paragraph>
      <Price>{item.price} $</Price>
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
