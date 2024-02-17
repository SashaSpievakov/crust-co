import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ErrorRequest from 'src/components/ErrorRequest/ErrorRequest';
import { Container } from 'src/styles/Base.styled';

import Categories from '../../components/Categories/Categories';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';
import { DropdownSelect, SearchItems } from '../../components/UI';
import { useAppSelector } from '../../hooks/reduxHooks';
import { IPizzaItem } from '../../models/IPizzaItem';
import { pizzasAPI } from '../../services';
import { selectCategory } from '../../store/slices/category/selectors/selectCategory';
import { modifySearchParamsName } from '../../utils/modifySearchParamsName';
import { Block, Title, Top } from './Home.styled';

export const sortNamesArr: string[] = ['rating', 'price', 'A to Z'];

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pizzas, setPizzas] = useState<IPizzaItem[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [activeSort, setActiveSort] = useState<number>(
    parseInt(searchParams.get('sortBy') || '0', 10) || 0,
  );
  const activeCategory = useAppSelector(selectCategory);

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

  const handleSortSelect = (index: number): void => {
    setActiveSort(index);
    setSearchParams({ sortBy: index.toString() });
  };

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
        <DropdownSelect
          chosenValue={sortNamesArr[activeSort]}
          sortNamesArr={sortNamesArr}
          onSelect={handleSortSelect}
        />
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
