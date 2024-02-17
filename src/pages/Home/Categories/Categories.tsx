import { FunctionComponent, KeyboardEvent } from 'react';

import { Li, Ul } from './Categories.styled';

interface CategoriesProps {
  activeCategory: number;
  onSelect: (index: number) => void;
}

const categoriesArr: string[] = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy'];

export const Categories: FunctionComponent<CategoriesProps> = ({
  activeCategory,
  onSelect,
}) => {
  const chosenCategory: string = categoriesArr[activeCategory];

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>, i: number) => {
    if (e.code === 'Enter') onSelect(i);
  };

  return (
    <section>
      <Ul>
        {categoriesArr.map((name, i) => (
          <Li
            key={name}
            onClick={() => onSelect(i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            chosen={chosenCategory === name}
            tabIndex={chosenCategory === name ? -1 : 0}
            aria-current={chosenCategory === name}
          >
            {name}
          </Li>
        ))}
      </Ul>
    </section>
  );
};
