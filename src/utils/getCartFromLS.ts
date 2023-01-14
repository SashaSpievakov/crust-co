import calTotalCount from './calcTotalCount';
import calTotalPrice from './calcTotalPrice';

export default function getCartFromLS() {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calTotalPrice(items);
  const itemsCount = calTotalCount(items);

  return {
    items,
    totalPrice,
    itemsCount,
  };
}
