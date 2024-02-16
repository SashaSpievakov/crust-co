import { ChangeEvent, useEffect, useState } from 'react';
import ErrorRequest from 'src/components/ErrorRequest/ErrorRequest';
import { Container } from 'src/styles/Base.styled';

import Categories from '../../components/Categories/Categories';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';
import Sort from '../../components/Sort/Sort';
import { SearchItems } from '../../components/UI';
import { useAppSelector } from '../../hooks/reduxHooks';
import { IPizzaItem } from '../../models/IPizzaItem';
import pizzasAPI from '../../services/PizzasService';
import { selectCategory } from '../../store/slices/category/selectors/selectCategory';
import { selectSort } from '../../store/slices/sort/selectors/selectSort';
import { modifySearchParamsName } from '../../utils/modifySearchParamsName';
import { Block, Title, Top } from './Home.styled';

export const sortNamesArr: string[] = ['rating', 'price', 'A to Z'];

const Home = () => {
  const [pizzas, setPizzas] = useState<IPizzaItem[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
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
    document.title = 'Crust & Co.';
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setPizzas(data);
    }
  }, [activeCategory, sortSearchParam, data, isSuccess]);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const onClickClose = () => {
    setSearchValue('');
  };

  return isError ? (
    <ErrorRequest />
  ) : (
    <Container data-testid="homePage">
      <Top>
        <Categories />
        <Sort sortNamesArr={sortNamesArr} />
      </Top>
      <Block>
        <Title>All Pizzas</Title>
        <SearchItems
          value={searchValue}
          width="240px"
          onChange={onChangeSearch}
          onClickClose={onClickClose}
          expandedWidth="300px"
        />
      </Block>
      <ProductsContainer
        isLoading={isLoading}
        items={pizzas}
        searchValue={searchValue}
      />
    </Container>
  );
};

export default Home;
