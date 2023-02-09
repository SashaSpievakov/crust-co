import { useAppSelector } from '../../hooks/reduxHooks';
import { IPizzaItem } from '../../models/IPizzaItem';
import { selectSearchValue } from '../../store/slices/searchSlice';
import ItemCard from '../ItemCard/ItemCard';
import Skeleton from '../UI/Skeleton/Skeleton';
import { Container, SearchError } from './ProductsContainer.styled';

interface ProductsContainerProps {
  isLoading: boolean;
  items: IPizzaItem[];
}

const ProductsContainer = ({ isLoading, items }: ProductsContainerProps) => {
  const searchValue = useAppSelector(selectSearchValue);
  const filteredItems = items.filter((item: IPizzaItem) =>
    item.name.toLowerCase().includes(searchValue.trim().toLowerCase()),
  );

  return (
    <Container notFound={filteredItems.length < 1}>
      {isLoading ? (
        [...new Array(9)].map((_, i) => <Skeleton key={i} />)
      ) : filteredItems.length > 1 ? (
        filteredItems.map((item: IPizzaItem) => (
          <ItemCard key={item.id} {...item} />
        ))
      ) : (
        <SearchError>No pizzas with that name were found...</SearchError>
      )}
    </Container>
  );
};
export default ProductsContainer;
