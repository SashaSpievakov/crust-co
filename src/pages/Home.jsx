import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ItemCard from "../components/ItemCard";
import Skeleton from "../components/ItemCard/Skeleton";
import SearchItems from "../components/SearchItems";
// import productItems from "../assets/data/db.json";

const Home = () => {
  const activeCategory = useSelector((state) => state.activeCategory.index)

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  const [activeSortName, setActiveSortName] = useState(0);

  const sortNamesArr = ['rating', 'price', 'A to Z'];
  const sortedActiveName = sortNamesArr[activeSortName];

  const sortPropertyName = (property) => {
    if (property === 'A to Z') {
      return 'name';
    } else {
      return property;
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6344adb1dcae733e8fe3067a.mockapi.io/pizza-items?${activeCategory > 0 ? `category=${activeCategory}&` : ''}sortBy=${sortPropertyName(sortedActiveName)}&order=desc`
      )
      .then(res => res.json())
      .then(arr => {
        setItems(arr);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(`Error: ${err.message}`);
      });

      window.scrollTo(0, 0);
  }, [activeCategory, sortedActiveName]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort
          activeSortName={activeSortName}
          setActiveSortName={setActiveSortName}
          sortNamesArr={sortNamesArr}
        />
      </div>
      <div className="content__title--block">
        <h2 className="content__title">All Pizzas</h2>
        <SearchItems searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items
            .filter(item => ((item.name).toLowerCase().includes(searchValue.trim().toLowerCase())))
            .map(item => <ItemCard key={item.id} {...item} />)}
      </div>
    </>
  )
}
export default Home