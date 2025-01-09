import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ErrorRequest } from 'src/components';
import { useDebounce } from 'src/hooks';
import { Container } from 'src/styles/Base.styled';

import { DropdownSelect, SearchItems } from '../../components/UI';
import { IPizzaItem } from '../../models';
import { pizzasAPI } from '../../services';
import { modifySearchParamsName } from '../../utils/modifySearchParamsName';
import { Categories, ProductsContainer } from './components';
import { Block, Title, Top } from './HomePage.styled';

export const sortNamesArr: string[] = ['rating', 'price', 'A to Z'];

export const HomePage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pizzas, setPizzas] = useState<IPizzaItem[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedSearchValue = useDebounce(searchValue, 100);
  const [activeSort, setActiveSort] = useState<number>(
    parseInt(searchParams.get('sortBy') || '0', 10) || 0,
  );
  const [activeCategory, setActiveCategory] = useState<number>(
    parseInt(searchParams.get('category') || '0', 10) || 0,
  );

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
    setSearchParams({
      sortBy: index.toString(),
      category: activeCategory.toString(),
    });
  };

  const handleCategorySelect = (index: number): void => {
    setActiveCategory(index);
    setSearchParams({
      category: index.toString(),
      sortBy: activeSort.toString(),
    });
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
        <Categories
          activeCategory={activeCategory}
          onSelect={handleCategorySelect}
        />
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
        searchValue={debouncedSearchValue}
      />
    </Container>
  );
};
