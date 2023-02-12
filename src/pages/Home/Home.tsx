import { useEffect, useState } from 'react';

import { Title, Block, Top, Error } from './Home.styled';
import { useAppSelector } from '../../hooks/reduxHooks';
import { selectSort } from '../../store/slices/sortSlice';
import { selectCategory } from '../../store/slices/categorySlice';
import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';
import SearchItems from '../../components/SearchItems/SearchItems';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';
import { IPizzaItem } from '../../models/IPizzaItem';
import pizzasAPI from '../../services/PizzasService';
import modifySearchParamsName from '../../utils/modifySearchParamsName';

export const sortNamesArr: string[] = ['rating', 'price', 'A to Z'];

const Home = () => {
  const [pizzas, setPizzas] = useState<IPizzaItem[]>([]);
  const activeCategory = useAppSelector(selectCategory);
  const activeSort = useAppSelector(selectSort);

  const sortSearchParam = modifySearchParamsName(sortNamesArr[activeSort]);

  const { data, isSuccess, isError, isLoading } = pizzasAPI.useFetchPizzasQuery(
    {
      activeCategory,
      sortSearchParam,
    },
  );

  useEffect(() => {
    if (isSuccess) {
      setPizzas(data);
    }
  }, [activeCategory, sortSearchParam, data, isSuccess]);

  return (
    <article data-testid="homePage">
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
    </article>
  );
};

export default Home;
