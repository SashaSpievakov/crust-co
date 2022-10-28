import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useWhyDidYouUpdate from 'ahooks/lib/useWhyDidYouUpdate';

import { selectCategory, setCategory } from '../redux/slices/categorySlice';

const Categories: React.FC = () => {
  const activeCategory = useSelector(selectCategory);
  const dispatch = useDispatch();

  const categoriesArr: string[] = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy'];

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