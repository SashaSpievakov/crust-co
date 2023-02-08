import { useEffect } from 'react';

import { Div, Li } from './Selector.styled';

interface SelectorProps {
  price: number;
  sizes: number[];
  types: number[];
  activeSize: number;
  activeType: number;
  setActivePrice: (index: number) => void;
  setActiveSize: (index: number) => void;
  setActiveType: (index: number) => void;
  typeNames: string[];
  isFullScreen?: boolean;
}

const Selector = ({
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
}: SelectorProps) => {
  const typeClickHandler = (type: number) => {
    if (activeType === 0 && type === 1) {
      setActivePrice(price + 1);
    } else if (activeType === 1 && type === 0) {
      setActivePrice(price - 1);
    }

    setActiveType(type);
  };

  const sizeClickHandler = (size: number) => {
    if (activeSize === 12 && size === 14) {
      setActivePrice(price + 2);
    } else if (activeSize === 12 && size === 16) {
      setActivePrice(price + 4);
    } else if (activeSize === 14 && size === 16) {
      setActivePrice(price + 2);
    } else if (activeSize === 14 && size === 12) {
      setActivePrice(price - 2);
    } else if (activeSize === 16 && size === 14) {
      setActivePrice(price - 2);
    } else if (activeSize === 16 && size === 12) {
      setActivePrice(price - 4);
    }

    setActiveSize(size);
  };

  useEffect(() => {
    setActiveSize(sizes[0]);
    setActiveType(types[0]);
  }, [sizes]);

  return (
    <Div isFullScreen={isFullScreen}>
      <ul>
        {types.map((type) => (
          <Li
            key={type}
            onClick={() => typeClickHandler(type)}
            chosen={activeType === types.indexOf(type)}
          >
            {typeNames[type]}
          </Li>
        ))}
      </ul>
      <ul>
        {sizes.map((size) => (
          <Li
            key={size}
            onClick={() => sizeClickHandler(size)}
            chosen={activeSize === size}
          >
            {size} inch
          </Li>
        ))}
      </ul>
    </Div>
  );
};
export default Selector;
