import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';

import { selectSort, setSort } from "../redux/slices/sortSlice";
import { selectCategory, setCategory } from "../redux/slices/categorySlice";
import { fetchItems, PizzaItem, selectPizzasData } from "../redux/slices/pizzasSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ItemCard from "../components/ItemCard";
import Skeleton from "../components/ItemCard/Skeleton";
import SearchItems from "../components/SearchItems/SearchItems";
import { selectSearchValue } from "../redux/slices/searchSlice";
// import productItems from "../assets/data/db.json";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const requested = useRef(false);
  const isMounted = useRef(false);
  const activeCategory = useSelector(selectCategory);
  const activeSort = useSelector(selectSort);
  const searchValue = useSelector(selectSearchValue);
  const {items, status} = useSelector(selectPizzasData);

  const sortNamesArr = ['rating', 'price', 'A to Z'];
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
    if (isMounted.current || (activeCategory > 0 || activeSort > 0)) {
      const queryStr = qs.stringify({
      category: activeCategory,
      sort: activeSort,
      }, {addQueryPrefix: true});

      navigate(queryStr);
    }

    isMounted.current = true;

  }, [activeCategory, activeSort, navigate])

  useEffect(() => {
    if(window.location.search) {
      const params = qs.parse(window.location.search.substring(1))

      dispatch(setCategory(params.category));
      dispatch(setSort(params.sort));
      requested.current = true;
    }
  }, [dispatch])

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!requested.current) {
      dispatch(
        // @ts-ignore
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