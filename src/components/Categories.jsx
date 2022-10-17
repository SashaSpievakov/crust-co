const Categories = ({ activeIndex, setActiveIndex}) => {
  const categoriesArr = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy'];

  return (
    <div className="categories">
    <ul>
      {categoriesArr.map((name, i) => (
        <li
          key={name}
          className={activeIndex === i ? "active" : ""}
          onClick={() => setActiveIndex(i)}
        >
          {name}
        </li>
      ))}
    </ul>
  </div>
  )
}
export default Categories