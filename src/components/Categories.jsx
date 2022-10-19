import { useSelector, useDispatch } from 'react-redux';

import { selectCategory, setCategory } from '../redux/slices/categorySlice';

const Categories = () => {
  const activeCategory = useSelector(selectCategory);
  const dispatch = useDispatch();

  const categoriesArr = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy'];

  const chosenClass = categoriesArr[activeCategory];

  return (
    <div className="categories">
    <ul>
      {categoriesArr.map((name, i) => (
        <li
          key={name}
          className={chosenClass === name ? "active" : ""}
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