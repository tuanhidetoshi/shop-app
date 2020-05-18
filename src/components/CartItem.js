import React from "react";
import "./_CartItem.scss";
import { useDispatch } from "react-redux";
import { removeCart, addCart } from "../store/actions/cart";
import CartItem from "../models/CartItems";

import { transNum } from "../helper/transNum";

export default (props) => {
  const dispatch = useDispatch();
  const item = props.item;
  const onAdd = () => {
    const newCartItem = new CartItem(
      item.id,
      item.name,
      item.image,
      item.price,
      1
    );
    dispatch(addCart(newCartItem));
  };

  const onRemove = () => {
    dispatch(removeCart(item.id));
  };

  return (
    <li className="c-dropdown__item">
      <p className="c-dropdown__image">
        <img src={item.image} alt="item 1" />
      </p>
      <div className="c-dropdown__info">
        <h4 className="c-dropdown__prodname">{item.name}</h4>
        <p>
          <span>{transNum(item.price)}</span>&nbsp;X&nbsp;
          <span>{item.quantity}</span>
        </p>
        <p>
          =<span>&nbsp;{transNum(item.price * item.quantity)}</span>&#8363;
        </p>
      </div>
      <div className="c-dropdown__actions">
        <ion-icon onClick={onRemove} name="remove-circle-outline"></ion-icon>
        <ion-icon onClick={onAdd} name="add-circle-outline"></ion-icon>
      </div>
    </li>
  );
};
