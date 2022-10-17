import { useSelector, useDispatch } from 'react-redux';

import { setCategory } from '../redux/slices/categorySlice';

const Categories = () => {
  const activeCategory = useSelector((state) => state.activeCategory.index);
  const dispatch = useDispatch();

  const categoriesArr = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy'];

  return (
    <div className="categories">
    <ul>
      {categoriesArr.map((name, i) => (
        <li
          key={name}
          className={activeCategory === i ? "active" : ""}
          onClick={() => dispatch(setCategory(i))}
        >
          {name}
        </li>
      ))}
    </ul>
  </div>
  )
}
export default Categories