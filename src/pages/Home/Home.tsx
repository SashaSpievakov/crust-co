import { useEffect, useState } from 'react';

import { Title, Block, Top, Error } from '../../styles/Base.styled';
import { selectSort } from '../../store/slices/sortSlice';
import { selectCategory } from '../../store/slices/categorySlice';
import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';
import SearchItems from '../../components/SearchItems/SearchItems';
import { IPizzaItem } from '../../models/IPizzaItem';
import { useAppSelector } from '../../hooks/reduxHooks';
import pizzasAPI from '../../services/PizzasService';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';

export const sortNamesArr: string[] = ['rating', 'price', 'A to Z'];

const Home = () => {
  const [pizzas, setPizzas] = useState<IPizzaItem[]>([]);
  const activeCategory = useAppSelector(selectCategory);
  const activeSort = useAppSelector(selectSort);

  const sortedActiveName = sortNamesArr[activeSort];

  const sortPropertyName = (property: string) => {
    if (property === 'A to Z') {
      return 'name&order=asc';
    }
    return `${property}&order=desc`;
  };

  const sortedPropertyName = sortPropertyName(sortedActiveName);

  const { data, isSuccess, isError, isLoading } = pizzasAPI.useFetchPizzasQuery(
    {
      activeCategory,
      sortedPropertyName,
    },
  );

  useEffect(() => {
    if (isSuccess) {
      setPizzas(data);
    }
  }, [activeCategory, sortedPropertyName, data, isSuccess]);

  return (
    <>
      <Top>
        <Categories />
        <Sort sortNamesArr={sortNamesArr} />
      </Top>
      <Block>
        <Title>All Pizzas</Title>
        <SearchItems />
      </Block>
      {isError ? (
        <Error>
          <h2>Request Error</h2>
          <p>Coudn&apos;t get store items. Try your request again later.</p>
        </Error>
      ) : (
        <ProductsContainer isLoading={isLoading} items={pizzas} />
      )}
    </>
  );
};

export default Home;
