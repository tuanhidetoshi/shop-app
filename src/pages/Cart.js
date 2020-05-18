import React from "react";
import "./_Cart.scss";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { transNum } from "../helper/transNum";
import { addCart, removeCart, deleteCart } from "../store/actions/cart";
import CartItem from "../models/CartItems";

const CartBlock = (props) => {
  const dispatch = useDispatch();
  const item = props.item;

  const onAddCart = () => {
    const newCartItem = new CartItem(
      item.id,
      item.name,
      item.image,
      item.price,
      1
    );
    dispatch(addCart(newCartItem));
  };

  const onRemoveCart = () => {
    dispatch(removeCart(item.id));
  };

  const onDeleteCart = () => {
    dispatch(deleteCart(item.id));
  };

  return (
    <div className="c-cartBlock">
      <p className="c-cartBlock__image">
        <img src={item.image} alt={item.name} />
      </p>
      <div className="c-cartBlock__info">
        <h3 className="c-cartBlock__title">{item.name}</h3>
        <p>
          Đơn giá: <span>{transNum(item.price)} &#8363;</span>
        </p>
        <p>
          Số lượng: <span>{transNum(item.quantity)}</span>
        </p>
        <p>
          Tổng giá: <span>{transNum(item.price * item.quantity)} &#8363;</span>
        </p>
      </div>
      <div className="c-cartBlock__actions">
        <button onClick={onRemoveCart}>
          <ion-icon
            style={{ fontSize: "32px" }}
            name="remove-circle-outline"
          ></ion-icon>
        </button>
        <button onClick={onAddCart}>
          <ion-icon
            style={{ fontSize: "32px" }}
            name="add-circle-outline"
          ></ion-icon>
        </button>
      </div>
      <div onClick={onDeleteCart} className="c-cartBlock__remove">
        <ion-icon
          style={{ fontSize: "32px" }}
          name="close-circle-outline"
        ></ion-icon>
      </div>
    </div>
  );
};

export default () => {
  const history = useHistory();
  const cart = useSelector((state) => state.cart);

  const toOrder = () => {
    history.push("/order");
  };
  return (
    <main className="p-cart l-layout">
      <h3 className="c-title">Giỏ hàng của bạn</h3>

      {cart.cart.length > 0 ? (
        cart.cart.map((item) => <CartBlock key={item.id} item={item} />)
      ) : (
        <p style={{ marginBottom: "20px" }}>Hiện giỏ hàng đang rỗng</p>
      )}
      <div className="c-line">
        <hr />
      </div>
      <h3 className="c-total">
        Tổng giá trị đơn hàng: <span>{transNum(cart.totalAmount)} &#8363;</span>
      </h3>
      {cart.cart.length > 0 ? (
        <div onClick={toOrder} className="c-confirmBtn">
          <p>Xác nhận đơn hàng</p>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};
