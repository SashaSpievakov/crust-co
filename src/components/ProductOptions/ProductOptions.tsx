import { FC, KeyboardEvent, useLayoutEffect } from 'react';

import { Li, Wrapper } from './ProductOptions.styled';
import { IProductOptions } from './ProductOptions.type';

export const ProductOptions: FC<IProductOptions> = ({
  price,
  sizes,
  types,
  activeSize,
  activeType,
  setActivePrice,
  setActiveSize,
  setActiveType,
  typeNames,
  isFullScreen = false,
}) => {
  const typeClickHandler = (newType: number) => {
    if (activeType !== newType) {
      setActivePrice(activeType < newType ? price + 1 : price - 1);
    }

    setActiveType(newType);
  };

  const sizeClickHandler = (newSize: number) => {
    const priceDifference = newSize - activeSize;
    setActivePrice(price + priceDifference);

    setActiveSize(newSize);
  };

  const handleKeyDownType = (e: KeyboardEvent<HTMLElement>, type: number) => {
    if (e.code === 'Enter') typeClickHandler(type);
  };

  const handleKeyDownSize = (e: KeyboardEvent<HTMLElement>, size: number) => {
    if (e.code === 'Enter') sizeClickHandler(size);
  };

  useLayoutEffect(() => {
    setActiveSize(sizes[0]);
    setActiveType(types[0]);
  }, [sizes]);

  return (
    <Wrapper isFullScreen={isFullScreen}>
      <ul>
        {types.map((type: number) => (
          <Li
            key={type}
            onClick={() => typeClickHandler(type)}
            onKeyDown={(e) => handleKeyDownType(e, type)}
            chosen={activeType === types.indexOf(type)}
            tabIndex={0}
            aria-current={activeType === types.indexOf(type)}
          >
            {typeNames[type]}
          </Li>
        ))}
      </ul>
      <ul>
        {sizes.map((size: number) => (
          <Li
            key={size}
            onClick={() => sizeClickHandler(size)}
            onKeyDown={(e) => handleKeyDownSize(e, size)}
            chosen={activeSize === size}
            tabIndex={0}
            aria-current={activeSize === size}
          >
            {size} inch
          </Li>
        ))}
      </ul>
    </Wrapper>
  );
};
