import { useEffect, useState } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ItemCard from "../components/ItemCard";
import Skeleton from "../components/ItemCard/Skeleton";
// import productItems from "../assets/data/db.json";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSortName, setActiveSortName] = useState(0);

  const sortNamesArr = ['rating', 'price', 'A to Z'];

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
      `https://6344adb1dcae733e8fe3067a.mockapi.io/pizza-items?${activeIndex > 0 ? `category=${activeIndex}&` : ''}sortBy=${sortPropertyName(sortNamesArr[activeSortName])}&order=desc`
      )
      .then(res => res.json())
      .then(arr => {
        setItems(arr);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
      });

      window.scrollTo(0, 0);
  }, [activeIndex, activeSortName]);

  return (
    <>
      <div className="content__top">
        <Categories activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <Sort
          activeSortName={activeSortName}
          setActiveSortName={setActiveSortName}
          sortNamesArr={sortNamesArr}
        />
      </div>
      <h2 className="content__title">All Pizzas</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items.map(item => <ItemCard key={item.id} {...item} />)}
      </div>
    </>
  )
}
export default Home