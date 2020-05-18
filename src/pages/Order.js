import React from "react";
import "./_Order.scss";
import { useSelector } from "react-redux";
import { transNum } from "../helper/transNum";

const CartBlock = (props) => {
  const item = props.item;

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
    </div>
  );
};

export default () => {
  const cart = useSelector((state) => state.cart);
  return (
    <main className="p-order l-layout">
      <h3 className="c-title">Đặt hàng</h3>
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
        <button className="c-orderBtn">Đặt hàng</button>
      ) : (
        ""
      )}
    </main>
  );
};
