export interface IItemsCountHandler {
  id: string;
  name: string;
  price: number;
  activeSize: number;
  activeType: number;
  typeNames: string[];
  isFullScreen?: boolean;
}
