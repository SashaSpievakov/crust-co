import { useAppSelector } from '../../hooks/reduxHooks';
import { IPizzaItem } from '../../models/IPizzaItem';
import { selectSearchValue } from '../../store/slices/searchSlice';
import ItemCard from '../ItemCard/ItemCard';
import Skeleton from '../ItemCard/Skeleton';
import Container from './ProductsContainer.styled';

interface ProductsContainerProps {
  isLoading: boolean;
  items: IPizzaItem[];
}

const ProductsContainer = ({ isLoading, items }: ProductsContainerProps) => {
  const searchValue = useAppSelector(selectSearchValue);

  return (
    <Container>
      {isLoading
        ? [...new Array(9)].map((_, i) => <Skeleton key={i} />)
        : items
            .filter((item: IPizzaItem) =>
              item.name
                .toLowerCase()
                .includes(searchValue.trim().toLowerCase()),
            )
            .map((item: IPizzaItem) => <ItemCard key={item.id} {...item} />)}
    </Container>
  );
};
export default ProductsContainer;
