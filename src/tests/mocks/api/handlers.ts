import { rest } from 'msw';
import { mockItem, mockItems } from './mockData';

const handlers = [
  rest.get(
    'https://6344adb1dcae733e8fe3067a.mockapi.io/pizza-items/9',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockItem), ctx.delay(20));
    },
  ),
  rest.get(
    'https://6344adb1dcae733e8fe3067a.mockapi.io/pizza-items',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockItems), ctx.delay(20));
    },
  ),
];

export default handlers;
