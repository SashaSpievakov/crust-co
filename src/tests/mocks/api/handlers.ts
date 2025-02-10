import { rest } from 'msw';

import { mockItem, mockItems } from '../mockData';

export const handlers = [
  rest.get(
    `${import.meta.env.VITE_APP_API_URL}/api/pizzas/Chicken%20Curry`,
    (req, res, ctx) => {
      return res(ctx.json(mockItem), ctx.status(200), ctx.delay(20));
    },
  ),
  rest.get(
    `${import.meta.env.VITE_APP_API_URL}/api/pizzas`,
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
