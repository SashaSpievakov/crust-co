import { useEffect, useState, useRef, memo, KeyboardEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

import { setSort } from '../../store/slices/sort/reducer/sortReducer';
import { selectSort } from '../../store/slices/sort/selectors/selectSort';
import { Section, Label, ArrowUp, ArrowDown, Popup, Li } from './Sort.styled';

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

  const handleLabelKeyDownClick = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter') setOpen(!open);
  };

  const handleLiKeyDownClick = (e: KeyboardEvent<HTMLElement>, i: number) => {
    if (e.code === 'Enter') changeActiveSortName(i);
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
    <Section ref={sortRef}>
      <Label
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => handleLabelKeyDownClick(e)}
        tabIndex={0}
      >
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
              onKeyDown={(e) => handleLiKeyDownClick(e, i)}
              tabIndex={0}
              chosen={chosenSortName === sortName}
            >
              {sortName}
            </Li>
          ))}
        </ul>
      </Popup>
    </Section>
  );
});

export default Sort;
