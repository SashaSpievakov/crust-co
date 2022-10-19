import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";

import mainLogo from "../assets/img/main-logo.svg";

const Header = () => {
  const {itemsCount, totalPrice} = useSelector(state => state.cart);

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={mainLogo} alt="Pizza logo" />
            <div>
              <h1>Pizza Place</h1>
              <p>the most delicious pizza in town</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>{totalPrice} $</span>
            <div className="button__delimiter"></div>
            <BsCart3 />
            <span>{itemsCount}</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
export default Header