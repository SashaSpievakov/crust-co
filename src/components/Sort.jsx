import { useEffect, useState, useRef } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { MdArrowDropDown, MdArrowDropUp} from 'react-icons/md';

import { setSort } from '../redux/slices/sortSlice';

const Sort = ({ sortNamesArr}) => {
  const activeSort = useSelector((state) => state.activeSort.index);
  const dispatch = useDispatch();
  const sortRef = useRef();

  const [open, setOpen] = useState(false);

  const chosenSortName = sortNamesArr[activeSort];

  const changeActiveSortName = i => {
    dispatch(setSort(i));
    setOpen(false);
  }

  useEffect(() => {
    const handleBodyClick = (e) => {
      if (!e.composedPath().includes(sortRef.current)) {
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
        {sortNamesArr.map((sortName, i) => (
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