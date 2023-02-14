import calTotalCount from './calcTotalCount/calcTotalCount';
import calTotalPrice from './calcTotalPrice/calcTotalPrice';

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
