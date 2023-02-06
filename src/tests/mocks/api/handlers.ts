import { rest } from 'msw';

const handlers = [
  rest.get(
    'https://6344adb1dcae733e8fe3067a.mockapi.io/pizza-items/9',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: '9',
            name: 'Vegetarian Pizza',
            description:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi aspernatur debitis quod suscipit, vitae placeat natus ipsum inventore esse rerum animi facere numquam saepe vero mollitia quibusdam at voluptates est commodi laudantium? Iste inventore quibusdam cupiditate nemo sint iusto minus nihil culpa! Sequi architecto nesciunt explicabo mollitia. Laboriosam, odio.',
            types: [0, 1],
            sizes: [12, 14, 16],
            price: 8,
            category: 3,
            rating: 15,
          },
        ]),
        ctx.delay(20),
      );
    },
  ),
];

export default handlers;
