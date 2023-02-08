import { IPizzaItem } from '../../../models/IPizzaItem';

export const mockItems: IPizzaItem[] = [
  {
    id: '3',
    name: 'Srimp Pizza',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi aspernatur debitis quod suscipit, vitae placeat natus ipsum inventore esse rerum animi facere numquam saepe vero mollitia quibusdam at voluptates est commodi laudantium',
    types: [0, 1],
    sizes: [12, 14, 16],
    price: 10,
    category: 3,
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

export const mockItem: IPizzaItem = {
  id: '9',
  name: 'Chicken Curry',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi aspernatur debitis quod suscipit, vitae placeat natus ipsum inventore esse rerum animi facere numquam saepe vero mollitia quibusdam at voluptates est commodi laudantium? Iste inventore quibusdam cupiditate nemo sint iusto minus nihil culpa! Sequi architecto nesciunt explicabo mollitia. Laboriosam, odio.',
  types: [0, 1],
  sizes: [12, 14, 16],
  price: 14,
  category: 3,
  rating: 15,
};
