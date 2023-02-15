import { rest } from 'msw';
import { mockItem, mockItems } from '../mockData/mockData';

const handlers = [
  rest.get(
    'https://6344adb1dcae733e8fe3067a.mockapi.io/pizza-items/9',
    (req, res, ctx) => {
      return res(ctx.json(mockItem), ctx.status(200), ctx.delay(20));
    },
  ),
  rest.get(
    'https://6344adb1dcae733e8fe3067a.mockapi.io/pizza-items',
    async (req, res, ctx) => {
      const category = req.url.searchParams.get('category');
      if (category) {
        if (req.url.searchParams.get('category') === '1') {
          return res(ctx.json([mockItems[1]]), ctx.status(200), ctx.delay(20));
        }
        return res(ctx.json(mockItems), ctx.status(200), ctx.delay(20));
      }
      return res(ctx.json(mockItems), ctx.status(200), ctx.delay(20));
    },
  ),
];

export default handlers;
