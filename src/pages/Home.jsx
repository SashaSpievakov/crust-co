import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import qs from 'qs';

import { setSort } from "../redux/slices/sortSlice";
import { setCategory } from "../redux/slices/categorySlice";
import { fetchItems } from "../redux/slices/pizzasSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ItemCard from "../components/ItemCard";
import Skeleton from "../components/ItemCard/Skeleton";
import SearchItems from "../components/SearchItems/SearchItems";
// import productItems from "../assets/data/db.json";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const requested = useRef(false);
  const isMounted = useRef(false);
  const activeCategory = useSelector((state) => state.activeCategory.index);
  const activeSort = useSelector((state) => state.activeSort.index);
  const searchValue = useSelector((state) => state.searchValue.value);
  const {items, status} = useSelector((state) => state.pizzas);

  // const [items, setItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const sortNamesArr = ['rating', 'price', 'A to Z'];
  const sortedActiveName = sortNamesArr[activeSort];

  const sortPropertyName = (property) => {
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
      dispatch(fetchItems({activeCategory, sortedPropertyName}));
    }

    requested.current = false;
  }, [activeCategory, sortedPropertyName]);

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
            .filter(item => ((item.name).toLowerCase().includes(searchValue.trim().toLowerCase())))
            .map(item => <ItemCard key={item.id} {...item} />)}
        </div>
      )}
    </>
  )
}
export default Home