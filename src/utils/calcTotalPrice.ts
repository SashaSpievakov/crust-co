import { ICartItem } from "../redux/slices/cartSlice";

export default function calTotalPrice(items: ICartItem[]) {
  return items.reduce((sum, obj) => obj.count * obj.price + sum, 0);
}
