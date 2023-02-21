import { useAppSelector } from '../../hooks/reduxHooks';
import { selectSearchValue } from '../../store/slices/search/selectors/selectSearchValue';
import { IPizzaItem } from '../../models/IPizzaItem';
import ItemCard from '../ItemCard/ItemCard';
import Skeleton from '../UI/Skeleton/Skeleton';
import { Section, SearchError } from './ProductsContainer.styled';

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
    <Section hasResult={filteredItems.length >= 1}>
      {isLoading ? (
        [...new Array(9)].map((_, i) => <Skeleton key={i} />)
      ) : filteredItems.length >= 1 ? (
        filteredItems.map((item: IPizzaItem) => (
          <ItemCard key={item.id} {...item} />
        ))
      ) : (
        <SearchError>No pizzas with that name were found...</SearchError>
      )}
    </Section>
  );
};
export default ProductsContainer;
