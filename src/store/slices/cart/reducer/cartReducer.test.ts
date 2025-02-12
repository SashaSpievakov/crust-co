import {
  CartItemMockProps,
  CartItemMockProps2,
  CartItemsMockProps,
} from '@src/tests/mocks/mockData/mockData';

import cartReducer, {
  addItem,
  clearCart,
  removeItem,
  removeItems,
} from './cartReducer';

describe('cartReducer tests', () => {
  describe('cartReducer addItem action', () => {
    test('should add a new item', () => {
      expect(
        cartReducer(
          { items: [], itemsCount: 0, totalPrice: 0 },
          addItem(CartItemMockProps2),
        ),
      ).toEqual({ items: [CartItemMockProps2], itemsCount: 1, totalPrice: 9 });
    });

    test('should add an existing item', () => {
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

    test('should add an item with an undefined state', () => {
      expect(cartReducer(undefined, addItem(CartItemMockProps2))).toEqual({
        items: [CartItemMockProps2],
        itemsCount: 1,
        totalPrice: 9,
      });
    });
  });

  describe('cartReducer removeItem action', () => {
    test('should remove an item', () => {
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

    test('should remove a non-existing item', () => {
      expect(
        cartReducer(
          { items: [CartItemMockProps], itemsCount: 13, totalPrice: 91 },
          removeItem(CartItemMockProps2),
        ),
      ).toEqual({ items: [CartItemMockProps], itemsCount: 13, totalPrice: 91 });
    });

    test('should remove an item with an undefined state', () => {
      expect(cartReducer(undefined, removeItem(CartItemMockProps))).toEqual({
        items: [],
        itemsCount: 0,
        totalPrice: 0,
      });
    });
  });

  describe('cartReducer removeItems action', () => {
    test('should remove items', () => {
      expect(
        cartReducer(CartItemsMockProps, removeItems(CartItemMockProps)),
      ).toEqual({
        items: [CartItemMockProps2],
        itemsCount: 1,
        totalPrice: 9,
      });
    });

    test('should remove non-existing items', () => {
      expect(
        cartReducer(
          { items: [CartItemMockProps2], itemsCount: 1, totalPrice: 9 },
          removeItems(CartItemMockProps),
        ),
      ).toEqual({ items: [CartItemMockProps2], itemsCount: 1, totalPrice: 9 });
    });

    test('should remove items with an undefined state', () => {
      expect(cartReducer(undefined, removeItems(CartItemMockProps))).toEqual({
        items: [],
        itemsCount: 0,
        totalPrice: 0,
      });
    });
  });

  describe('cartReducer clearCart action', () => {
    test('should clear the cart', () => {
      expect(cartReducer(CartItemsMockProps, clearCart())).toEqual({
        items: [],
        itemsCount: 0,
        totalPrice: 0,
      });
    });

    test('should clear the cart with an undefined state', () => {
      expect(cartReducer(undefined, clearCart())).toEqual({
        items: [],
        itemsCount: 0,
        totalPrice: 0,
      });
    });
  });
});
