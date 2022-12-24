import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import { useAppSelector } from "../../hooks/reduxHooks";
// import { ICartItem } from "../../models/ICartItem";
import itemAPI from "../../services/ItemService";
// import { selectItem } from "../../store/slices/itemSlice";
import { Image, Title, Paragraph, Price, Item } from "./FullItem.styled";

const FullItem = () => {
  const [itemId, setItemId] = useState("1");
  const { id } = useParams();
  const { data: item, isSuccess } = itemAPI.useFetchItemQuery(itemId);
  // const { data } = useAppSelector(selectItem);

  useEffect(() => {
    if (id !== undefined) {
      setItemId(id);
    }
  }, [id]);

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
    </Item>
  ) : (
    <div>fuck you</div>
  );
};
export default FullItem;
