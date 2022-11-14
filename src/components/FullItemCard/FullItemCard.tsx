import { useSelector } from "react-redux";
import { selectItem } from "../../redux/slices/itemSlice";

import { Image, Title, Paragraph, Price, Item } from "./FullItemCard.styled";

const FullItemCard: React.FC = () => {
  const { data } = useSelector(selectItem);

  return (
    <Item>
      <Image src={data.imageUrl} alt="pizza"/>
      <Title>{data.name}</Title>
      <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odit voluptates aliquid cupiditate reiciendis et mollitia minima aliquam a beatae, neque tempore necessitatibus commodi sunt minus. Expedita, voluptatum, dignissimos fugiat, neque maxime eaque modi eum officiis illo molestiae fugit? Inventore quod cumque laboriosam reprehenderit, odit quis error eius consequatur itaque totam nobis corporis incidunt amet placeat consectetur magnam aspernatur modi?</Paragraph>
      <Price>{data.price} $</Price>
    </Item>
  )
}
export default FullItemCard