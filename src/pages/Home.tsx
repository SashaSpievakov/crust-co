import React, { useEffect, useRef } from "react";
import { useSelector } from 'react-redux';

import { selectSort } from "../redux/slices/sortSlice";
import { selectCategory } from "../redux/slices/categorySlice";
import { fetchItems, PizzaItem, selectPizzasData } from "../redux/slices/pizzasSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ItemCard from "../components/ItemCard";
import Skeleton from "../components/ItemCard/Skeleton";
import SearchItems from "../components/SearchItems";
import { selectSearchValue } from "../redux/slices/searchSlice";
import { useAppDispatch } from "../redux/store";

const sortNamesArr: string[] = ['rating', 'price', 'A to Z'];

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const requested = useRef(false);
  const activeCategory = useSelector(selectCategory);
  const activeSort = useSelector(selectSort);
  const searchValue = useSelector(selectSearchValue);
  const {items, status} = useSelector(selectPizzasData);

  const sortedActiveName = sortNamesArr[activeSort];

  const sortPropertyName = (property: string) => {
    if (property === 'A to Z') {
      return 'name&order=asc';
    } else {
      return property + '&order=desc';
    }
  }

  const sortedPropertyName = sortPropertyName(sortedActiveName);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!requested.current) {
      dispatch(
        fetchItems({activeCategory, sortedPropertyName})
      );
    }

    requested.current = false;
  }, [activeCategory, sortedPropertyName, dispatch]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort
          sortNamesArr={sortNamesArr}
        />
      </div>
      <div className="content__title--block">
        <h2 className="content__title">All Pizzas</h2>
        <SearchItems />
      </div>
      {status === 'rejected'
      ? (
        <div className="content__error">
          <h2>Request Error</h2>
          <p>Coudn't get store items. Try you request again later.</p>
        </div>
      ) : (
        <div className="content__items">
        {status === 'loading'
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items
            .filter((item: PizzaItem) => ((item.name).toLowerCase().includes(searchValue.trim().toLowerCase())))
            .map((item: PizzaItem) => <ItemCard count={0} key={item.id} {...item} />)}
        </div>
      )}
    </>
  )
}
export default Home