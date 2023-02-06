import { rest } from 'msw';
import { IPizzaItem } from '../../../models/IPizzaItem';

const mockItems: IPizzaItem[] = [
  {
    id: '3',
    name: 'Meat Pizza',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi aspernatur debitis quod suscipit, vitae placeat natus ipsum inventore esse rerum animi facere numquam saepe vero mollitia quibusdam at voluptates est commodi laudantium',
    types: [0, 1],
    sizes: [12, 14, 16],
    price: 10,
    category: 1,
    rating: 6,
  },
  {
    id: '2',
    name: 'Pepperoni Pizza',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi aspernatur debitis quod suscipit, vitae placeat natus ipsum inventore esse rerum animi facere numquam saepe vero mollitia quibusdam at voluptates est commodi laudantium',
    types: [0],
    sizes: [12, 14],
    price: 12,
    category: 1,
    rating: 13,
  },
];

const mockItem: IPizzaItem = {
  id: '9',
  name: 'Vegetarian Pizza',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi aspernatur debitis quod suscipit, vitae placeat natus ipsum inventore esse rerum animi facere numquam saepe vero mollitia quibusdam at voluptates est commodi laudantium? Iste inventore quibusdam cupiditate nemo sint iusto minus nihil culpa! Sequi architecto nesciunt explicabo mollitia. Laboriosam, odio.',
  types: [0, 1],
  sizes: [12, 14, 16],
  price: 8,
  category: 3,
  rating: 15,
};

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
