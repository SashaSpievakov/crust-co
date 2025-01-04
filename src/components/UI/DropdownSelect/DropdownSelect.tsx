import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react';

import {
  ArrowDown,
  ArrowUp,
  Label,
  Li,
  Popup,
  Section,
} from './DropdownSelect.styled';

interface DropdownSelectProps {
  chosenValue: string;
  sortNamesArr: string[];
  onSelect: (index: number) => void;
}

export const DropdownSelect: FC<DropdownSelectProps> = ({
  chosenValue,
  sortNamesArr,
  onSelect,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const sortRef = useRef<HTMLDivElement | null>(null);

  const handleOptionClick = (index: number) => {
    onSelect(index);
    setOpen(false);
  };

  const handleOptionKeyDownClick = (
    e: KeyboardEvent<HTMLElement>,
    i: number,
  ) => {
    if (e.code === 'Enter') handleOptionClick(i);
  };

  const handleLabelKeyDownClick = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter') setOpen(!open);
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
        <span data-testid="currenChosenSortName">{chosenValue}</span>
      </Label>
      <Popup open={open} aria-hidden={!open}>
        <ul aria-hidden={!open} data-testid="popupList">
          {sortNamesArr.map((sortName, i: number) => (
            <Li
              key={sortName}
              onClick={() => handleOptionClick(i)}
              onKeyDown={(e) => handleOptionKeyDownClick(e, i)}
              tabIndex={0}
              chosen={chosenValue === sortName}
            >
              {sortName}
            </Li>
          ))}
        </ul>
      </Popup>
    </Section>
  );
};
