import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCategory, setCategory } from "../../redux/slices/categorySlice";
import { Ul, Li } from "./Categories.styled";

const categoriesArr: string[] = ["All", "Meat", "Vegetarian", "Grill", "Spicy"];

const Categories = () => {
  const activeCategory = useSelector(selectCategory);
  const dispatch = useDispatch();

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
