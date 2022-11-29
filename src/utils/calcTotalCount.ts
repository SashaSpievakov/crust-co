import { ICartItem } from "../redux/slices/cartSlice";

export default function calTotalCount(items: ICartItem[]) {
  return items.reduce((sum, obj) => obj.count + sum, 0);
}
