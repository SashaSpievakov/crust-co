import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { selectCategory, setCategory } from '../../store/slices/categorySlice';
import { Ul, Li } from './Categories.styled';

const categoriesArr: string[] = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy'];

const Categories = () => {
  const activeCategory = useAppSelector(selectCategory);
  const dispatch = useAppDispatch();

  const chosenClass = categoriesArr[activeCategory];

  return (
    <div>
      <Ul>
        {categoriesArr.map((name, i) => (
          <Li
            key={name}
            onClick={() => dispatch(setCategory(i))}
            chosen={chosenClass === name}
          >
            {name}
          </Li>
        ))}
      </Ul>
    </div>
  );
};

export default React.memo(Categories);
