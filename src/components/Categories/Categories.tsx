import React, { KeyboardEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { setCategory } from '../../store/slices/category/reducer/categoryReducer';
import { selectCategory } from '../../store/slices/category/selectors/selectCategory';
import { Li, Ul } from './Categories.styled';

const categoriesArr: string[] = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy'];

const Categories = () => {
  const activeCategory = useAppSelector(selectCategory);
  const dispatch = useAppDispatch();

  const chosenClass = categoriesArr[activeCategory];

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>, i: number) => {
    if (e.code === 'Enter') dispatch(setCategory(i));
  };

  return (
    <section>
      <Ul>
        {categoriesArr.map((name, i) => (
          <Li
            key={name}
            onClick={() => dispatch(setCategory(i))}
            onKeyDown={(e) => handleKeyDown(e, i)}
            chosen={chosenClass === name}
            tabIndex={chosenClass === name ? -1 : 0}
            aria-current={chosenClass === name}
          >
            {name}
          </Li>
        ))}
      </Ul>
    </section>
  );
};

export default React.memo(Categories);
