import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../models/CartItems";
import { useDispatch } from "react-redux";
import { addCart } from "../store/actions/cart";

import { transNum } from "../helper/transNum";

import "./_Card.scss";

export default (props) => {
  const dispatch = useDispatch();
  const item = props.item;

  const bestCard = item.quantity > 50;
  const newsCard =
    Math.floor(Date.now() / 1000) - item.addedDate < 0.5 * 365 * 24 * 60 * 60;

  const addCartItemHandler = () => {
    const newCartItem = new CartItem(
      item.id,
      item.name,
      item.image,
      item.price,
      1
    );
    dispatch(addCart(newCartItem));
  };

  return (
    <div className="c-cardOutline">
      <div className="c-card">
        <p className="c-card__image">
          <img src={item.image} alt="glasses" />
          <span
            className={`c-card__tag ${bestCard ? "best" : ""} ${
              newsCard ? "new" : ""
            }`}
          ></span>
        </p>
        <div className="c-card__info">
          <h4 className="c-card__title">{item.name}</h4>
          <p className="c-card__price">
            {transNum(item.price)}&#8363;
            <span>{transNum(item.price * 1.6)}&#8363;</span>
          </p>
          <div className="c-card__actions">
            <Link className="c-card__detail" to={`/shop/${item.id}`}>
              View
            </Link>
            <button onClick={addCartItemHandler} className="c-card__cart">
              <ion-icon style={{ fontSize: "32px" }} name="cart"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
