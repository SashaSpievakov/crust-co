import { useEffect, useRef } from "react";

import { Title, Block, Top, Items, Error } from "../styles/Base.styled";
import { selectSort } from "../store/slices/sortSlice";
import { selectCategory } from "../store/slices/categorySlice";
import { fetchItems, selectPizzasData } from "../store/slices/pizzasSlice";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import ItemCard from "../components/ItemCard/ItemCard";
import Skeleton from "../components/ItemCard/Skeleton";
import SearchItems from "../components/SearchItems/SearchItems";
import { selectSearchValue } from "../store/slices/searchSlice";
import { IPizzaItem } from "../models/IPizzaItem";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

const sortNamesArr: string[] = ["rating", "price", "A to Z"];

const HomeComp = () => {
  const dispatch = useAppDispatch();
  const requested = useRef(false);
  const activeCategory = useAppSelector(selectCategory);
  const activeSort = useAppSelector(selectSort);
  const searchValue = useAppSelector(selectSearchValue);
  const { items, status } = useAppSelector(selectPizzasData);

  const sortedActiveName = sortNamesArr[activeSort];

  const sortPropertyName = (property: string) => {
    if (property === "A to Z") {
      return "name&order=asc";
    }
    return `${property}&order=desc`;
  };

  const sortedPropertyName = sortPropertyName(sortedActiveName);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!requested.current) {
      dispatch(fetchItems({ activeCategory, sortedPropertyName }));
    }

    requested.current = false;
  }, [activeCategory, sortedPropertyName, dispatch]);

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
      {status === "rejected" ? (
        <Error>
          <h2>Request Error</h2>
          <p>Coudn&apos;t get store items. Try you request again later.</p>
        </Error>
      ) : (
        <Items>
          {status === "loading"
            ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
            : items
                .filter((item: IPizzaItem) =>
                  item.name
                    .toLowerCase()
                    .includes(searchValue.trim().toLowerCase()),
                )
                .map((item: IPizzaItem) => (
                  <ItemCard count={0} key={item.id} {...item} />
                ))}
        </Items>
      )}
    </>
  );
};

export default HomeComp;
