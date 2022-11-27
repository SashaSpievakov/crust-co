import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { clearItems, selectCart } from "../../redux/slices/cartSlice";
import CartItem from "../../components/CartItem/CartItem";
import CartEmpty from "../../components/CartEmpty/CartEmpty";
import { ButtonBack, ButtonPay } from "../../components/Buttons/Buttons.styled";
import {
  Top,
  Title,
  CartIcon,
  Clear,
  Trash,
  Bottom,
  Details,
  Buttons,
} from "./Cart.styled";

interface Item {
  id: string;
  name: string;
  price: number;
  size: number;
  type: string;
  count: number;
}

function Cart() {
  const { itemsCount, totalPrice, items } = useSelector(selectCart);
  const dispatch = useDispatch();

  return (
    <div>
      {items.length ? (
        <>
          <Top>
            <Title>
              <CartIcon />
              Cart
            </Title>
            <Clear>
              <Trash />
              <span role="presentation" onClick={() => dispatch(clearItems())}>
                Delete all items
              </span>
            </Clear>
          </Top>

          <section>
            {items.map((item: Item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </section>

          <Bottom>
            <Details>
              <span>
                {" "}
                Items <b>{itemsCount}</b>{" "}
              </span>
              <span>
                {" "}
                Subtotal <b>{totalPrice} $</b>{" "}
              </span>
            </Details>
            <Buttons>
              <ButtonBack to="/" as={Link}>
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 6.93015L6.86175 1"
                    stroke="#D3D3D3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Go Back</span>
              </ButtonBack>
              <ButtonPay>
                <span>Buy now</span>
              </ButtonPay>
            </Buttons>
          </Bottom>
        </>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
}

export default Cart;
