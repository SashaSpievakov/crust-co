import { useAppSelector } from '../../hooks/reduxHooks';
import { selectSearchValue } from '../../store/slices/search/selectors/selectSearchValue';
import { IPizzaItem } from '../../models/IPizzaItem';
import ItemCard from '../ItemCard/ItemCard';
import { Section, SearchError } from './ProductsContainer.styled';

interface ProductsContainerProps {
  items: IPizzaItem[];
}

const ProductsContainer = ({ items }: ProductsContainerProps) => {
  const searchValue = useAppSelector(selectSearchValue);
  const filteredItems = items.filter((item: IPizzaItem) =>
    item.name.toLowerCase().includes(searchValue.trim().toLowerCase()),
  );

  return (
    <Section>
      {filteredItems.length >= 1 ? (
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
