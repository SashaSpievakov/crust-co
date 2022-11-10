import { useSelector } from "react-redux";
import { selectItem } from "../../redux/slices/itemSlice";

import styles from "./styles.module.scss";
import { Item } from "../../Base.styled";

const FullItemCard: React.FC = () => {
  const { data } = useSelector(selectItem);

  return (
    <Item>
      <img src={data.imageUrl} alt="pizza" className={styles.image} />
      <h2 className={styles.header}>{data.name}</h2>
      <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odit voluptates aliquid cupiditate reiciendis et mollitia minima aliquam a beatae, neque tempore necessitatibus commodi sunt minus. Expedita, voluptatum, dignissimos fugiat, neque maxime eaque modi eum officiis illo molestiae fugit? Inventore quod cumque laboriosam reprehenderit, odit quis error eius consequatur itaque totam nobis corporis incidunt amet placeat consectetur magnam aspernatur modi?</p>
      <h4 className={styles.price}>{data.price} $</h4>
    </Item>
  )
}
export default FullItemCard