import { useAppSelector } from '../../hooks/reduxHooks';
import { IPizzaItem } from '../../models/IPizzaItem';
import { selectSearchValue } from '../../store/slices/search/selectors/selectSearchValue';
import ItemCard from '../ItemCard/ItemCard';
import { SkeletonLoader } from '../UI/SkeletonLoader';
import { SearchError, Section } from './ProductsContainer.styled';

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
    <Section
      noSearchResult={searchValue.length >= 1 && filteredItems.length <= 1}
    >
      {isLoading ? (
        [...new Array(9)].map((_, i) => (
          <SkeletonLoader
            key={i}
            width={250}
            height={470}
            viewBox="0 0 250 470"
          >
            <rect x="5" y="335" rx="5" ry="5" width="240" height="68" />
            <rect x="27" y="425" rx="5" ry="5" width="60" height="40" />
            <rect x="134" y="423" rx="20" ry="20" width="95" height="45" />
            <rect x="40" y="275" rx="10" ry="10" width="170" height="35" />
            <circle cx="123" cy="135" r="120" />
          </SkeletonLoader>
        ))
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
