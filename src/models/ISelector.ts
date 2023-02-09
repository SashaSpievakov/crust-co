export interface ISelector {
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
