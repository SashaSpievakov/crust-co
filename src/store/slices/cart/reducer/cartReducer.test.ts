import {
  CartItemMockProps,
  CartItemMockProps2,
  CartItemsMockProps,
} from '../../../../tests/mocks/mockData/mockData';
import cartReducer, {
  addItem,
  removeItem,
  removeItems,
  clearCart,
} from './cartReducer';

describe('tests cartReducer', () => {
  describe('tests addItem action', () => {
    test('adds a new item', () => {
      expect(
        cartReducer(
          { items: [], itemsCount: 0, totalPrice: 0 },
          addItem(CartItemMockProps2),
        ),
      ).toEqual({ items: [CartItemMockProps2], itemsCount: 1, totalPrice: 9 });
    });

    test('adds an existing item', () => {
      expect(
        cartReducer(CartItemsMockProps, addItem(CartItemMockProps)),
      ).toEqual({
        items: [
          {
            id: '6',
            name: 'Cheesburger Pizza',
            price: 7,
            size: 14,
            type: 'thin',
            count: 14,
          },
          CartItemMockProps2,
        ],
        itemsCount: 15,
        totalPrice: 107,
      });
    });

    test('adds an item with an undefined state', () => {
      expect(cartReducer(undefined, addItem(CartItemMockProps2))).toEqual({
        items: [CartItemMockProps2],
        itemsCount: 1,
        totalPrice: 9,
      });
    });
  });

  describe('tests removeItem action', () => {
    test('removes an item', () => {
      expect(
        cartReducer(CartItemsMockProps, removeItem(CartItemMockProps)),
      ).toEqual({
        items: [
          {
            id: '6',
            name: 'Cheesburger Pizza',
            price: 7,
            size: 14,
            type: 'thin',
            count: 12,
          },
          CartItemMockProps2,
        ],
        itemsCount: 13,
        totalPrice: 93,
      });
    });

    test('removes the wrong item', () => {
      expect(
        cartReducer(
          { items: [CartItemMockProps], itemsCount: 13, totalPrice: 91 },
          removeItem(CartItemMockProps2),
        ),
      ).toEqual({ items: [CartItemMockProps], itemsCount: 13, totalPrice: 91 });
    });

    test('removes an item with an undefined state', () => {
      expect(cartReducer(undefined, removeItem(CartItemMockProps))).toEqual({
        items: [],
        itemsCount: 0,
        totalPrice: 0,
      });
    });
  });

  describe('tests removeItems action', () => {
    test('removes items', () => {
      expect(
        cartReducer(CartItemsMockProps, removeItems(CartItemMockProps)),
      ).toEqual({
        items: [CartItemMockProps2],
        itemsCount: 1,
        totalPrice: 9,
      });
    });

    test('removes the wrong items', () => {
      expect(
        cartReducer(
          { items: [CartItemMockProps2], itemsCount: 1, totalPrice: 9 },
          removeItems(CartItemMockProps),
        ),
      ).toEqual({ items: [CartItemMockProps2], itemsCount: 1, totalPrice: 9 });
    });

    test('removes items with an undefined state', () => {
      expect(cartReducer(undefined, removeItems(CartItemMockProps))).toEqual({
        items: [],
        itemsCount: 0,
        totalPrice: 0,
      });
    });
  });

  describe('tests clearCart action', () => {
    test('clears cart with a normal state', () => {
      expect(cartReducer(CartItemsMockProps, clearCart())).toEqual({
        items: [],
        itemsCount: 0,
        totalPrice: 0,
      });
    });

    test('clears cart with an undefined state', () => {
      expect(cartReducer(undefined, clearCart())).toEqual({
        items: [],
        itemsCount: 0,
        totalPrice: 0,
      });
    });
  });
});
