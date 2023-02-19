import { useEffect, useState } from 'react';

import { Container } from 'src/styles/Base.styled';
import Skeleton from 'src/components/UI/Skeleton/Skeleton';
import { Title, Block, Top, ErrorHeading, ErrorParagraph } from './Home.styled';
import { useAppSelector } from '../../hooks/reduxHooks';
import { selectSort } from '../../store/slices/sort/selectors/selectSort';
import { selectCategory } from '../../store/slices/category/selectors/selectCategory';
import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';
import SearchItems from '../../components/SearchItems/SearchItems';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';
import { IPizzaItem } from '../../models/IPizzaItem';
import pizzasAPI from '../../services/PizzasService';
import modifySearchParamsName from '../../utils/modifySearchParamsName/modifySearchParamsName';

export const sortNamesArr: string[] = ['rating', 'price', 'A to Z'];

const Home = () => {
  const [pizzas, setPizzas] = useState<IPizzaItem[]>([]);
  const activeCategory = useAppSelector(selectCategory);
  const activeSort = useAppSelector(selectSort);

  const sortSearchParam = modifySearchParamsName(sortNamesArr[activeSort]);

  const { data, isSuccess, isLoading } = pizzasAPI.useFetchPizzasQuery({
    activeCategory,
    sortSearchParam,
  });

  useEffect(() => {
    if (isSuccess) {
      setPizzas(data);
    }
  }, [activeCategory, sortSearchParam, data, isSuccess]);

  return (
    <Container data-testid="homePage">
      <Top>
        <Categories />
        <Sort sortNamesArr={sortNamesArr} />
      </Top>
      <Block>
        <Title>All Pizzas</Title>
        <SearchItems />
      </Block>
      {isLoading ? (
        [...new Array(9)].map((_, i) => <Skeleton key={i} />)
      ) : isSuccess ? (
        <ProductsContainer items={pizzas} />
      ) : (
        <>
          <ErrorHeading>Request Error</ErrorHeading>
          <ErrorParagraph>
            Coudn&apos;t get store items. Try your request again later.
          </ErrorParagraph>
        </>
      )}
    </Container>
  );
};

export default Home;
