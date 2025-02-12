import { ChangeEventHandler, KeyboardEvent, memo, useRef } from 'react';

import { Cross, Input, SearchIcon, Wrapper } from './SearchItems.styled';

interface SearchItemsProps {
  value: string;
  width: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClickClose: () => void;
  expandedWidth?: string;
}

export const SearchItems = memo(
  ({
    value,
    width,
    onChange,
    onClickClose,
    expandedWidth,
  }: SearchItemsProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onClickSearch = () => {
      inputRef.current?.focus();
    };

    const handleCrossKeyDownClick = (e: KeyboardEvent<SVGElement>) => {
      if (e.code === 'Enter') {
        onClickClose();
      }
    };

    return (
      <Wrapper>
        <SearchIcon onClick={onClickSearch} data-testid="searchIcon" />
        <Input
          ref={inputRef}
          placeholder="Search..."
          value={value}
          onChange={onChange}
          width={width}
          expandedWidth={expandedWidth}
        />
        {value && (
          <Cross
            onClick={onClickClose}
            onKeyDown={(e) => handleCrossKeyDownClick(e)}
            tabIndex={0}
            data-testid="cleanInput"
          />
        )}
      </Wrapper>
    );
  },
);

SearchItems.displayName = 'SearchItems';
