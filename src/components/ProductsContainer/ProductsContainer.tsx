import { useAppSelector } from '../../hooks/reduxHooks';
import { selectSearchValue } from '../../store/slices/search/selectors/selectSearchValue';
import { IPizzaItem } from '../../models/IPizzaItem';
import ItemCard from '../ItemCard/ItemCard';
import { Container, SearchError } from './ProductsContainer.styled';

interface ProductsContainerProps {
  items: IPizzaItem[];
}

const ProductsContainer = ({ items }: ProductsContainerProps) => {
  const searchValue = useAppSelector(selectSearchValue);
  const filteredItems = items.filter((item: IPizzaItem) =>
    item.name.toLowerCase().includes(searchValue.trim().toLowerCase()),
  );

  return (
    <Container>
      {filteredItems.length >= 1 ? (
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
