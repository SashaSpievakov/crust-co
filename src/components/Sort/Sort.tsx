import { useEffect, useState, useRef, memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

import { selectSort, setSort } from '../../store/slices/sortSlice';
import { Wrapper, Label, ArrowUp, ArrowDown, Popup, Li } from './Sort.styled';

interface CategoriesProps {
  sortNamesArr: string[];
}

const Sort = memo(({ sortNamesArr }: CategoriesProps) => {
  const activeSort = useAppSelector(selectSort);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const sortRef = useRef<HTMLDivElement>(null);

  const chosenSortName = sortNamesArr[activeSort];

  const changeActiveSortName = (index: number) => {
    dispatch(setSort(index));
    setOpen(false);
  };

  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };
    if (open) {
      document.body.addEventListener('click', handleBodyClick);
    }

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [open]);

  return (
    <Wrapper ref={sortRef}>
      <Label onClick={() => setOpen(!open)}>
        {open ? (
          <ArrowUp data-testid="popupIcon" />
        ) : (
          <ArrowDown data-testid="popupIcon" />
        )}
        <b>Sort by</b>
        <span data-testid="currenChosenSortName">{chosenSortName}</span>
      </Label>
      <Popup open={open} aria-hidden={!open}>
        <ul aria-hidden={!open} data-testid="popupList">
          {sortNamesArr.map((sortName, i: number) => (
            <Li
              key={sortName}
              onClick={() => changeActiveSortName(i)}
              chosen={chosenSortName === sortName}
            >
              {sortName}
            </Li>
          ))}
        </ul>
      </Popup>
    </Wrapper>
  );
});

export default Sort;
