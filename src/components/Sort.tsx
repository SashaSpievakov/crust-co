import React, { useEffect, useState, useRef } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { MdArrowDropDown, MdArrowDropUp} from 'react-icons/md';
// import useWhyDidYouUpdate from 'ahooks/lib/useWhyDidYouUpdate';

import { selectSort, setSort } from '../redux/slices/sortSlice';

interface CategoriesProps {
  sortNamesArr: string[]
}

const Sort: React.FC<CategoriesProps> = ({ sortNamesArr }) => {
  // useWhyDidYouUpdate('sort', {sortNamesArr})
  const activeSort = useSelector(selectSort);
  const dispatch = useDispatch();
  const sortRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  const chosenSortName = sortNamesArr[activeSort];

  const changeActiveSortName = (index: number) => {
    dispatch(setSort(index));
    setOpen(false);
  }

  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
      setOpen(false);
      }
    }
    if (open) {
      document.body.addEventListener('click', handleBodyClick);
    }

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    }
  }, [open])

  return (
    <div className="sort" onClick={() => setOpen(!open)} ref={sortRef}>
      <div className="sort__label">
        {open ? <MdArrowDropUp className="sort__arrow" /> : (
          <MdArrowDropDown className="sort__arrow" />
        )}
        <b>Sort by</b>
        <span>{chosenSortName}</span>
      </div>
    {open && (
      <div className="sort__popup">
      <ul>
        {sortNamesArr.map((sortName, i: number) => (
          <li
            key={sortName}
            className={chosenSortName === sortName ? "active" : ""}
            onClick={() => changeActiveSortName(i)}
          >
            {sortName}
          </li>
        ))}
      </ul>
    </div>
    )}

  </div>
  )
}
export default Sort