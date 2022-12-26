import { Div, Li } from "./Selector.styled";

interface SelectorProps {
  sizes: number[];
  types: number[];
  activeSize: number;
  activeType: number;
  setActiveSize: (index: number) => void;
  setActiveType: (index: number) => void;
  typeNames: string[];
}

const Selector = ({
  sizes,
  types,
  activeSize,
  activeType,
  setActiveSize,
  setActiveType,
  typeNames,
}: SelectorProps) => {
  return (
    <Div>
      <ul>
        {types.map((type) => (
          <Li
            key={type}
            onClick={() => setActiveType(type)}
            chosen={activeType === types.indexOf(type)}
          >
            {typeNames[type]}
          </Li>
        ))}
      </ul>
      <ul>
        {sizes.map((size, i) => (
          <Li
            key={size}
            onClick={() => setActiveSize(i)}
            chosen={activeSize === i}
          >
            {size} inch
          </Li>
        ))}
      </ul>
    </Div>
  );
};
export default Selector;
