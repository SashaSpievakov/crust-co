import { ICartItem } from "../models/ICartItem";

export default function calTotalCount(items: ICartItem[]) {
  return items.reduce((sum, obj) => obj.count + sum, 0);
}
