import React from "react";
import "./_ItemDetail.scss";
import { useHistory } from "react-router-dom";

import data from "../data/dummy-data";
import { useDispatch } from "react-redux";
import { addCart } from "../store/actions/cart";

import { transNum } from "../helper/transNum";
import CartItem from "../models/CartItems";

export default (props) => {
  const selectedItem = data.shop.find(
    (item) => item.id.toString() === props.match.params.id
  );

  const history = useHistory();
  const dispatch = useDispatch();

  const addCartHandler = () => {
    const newAddCart = new CartItem(
      selectedItem.id,
      selectedItem.name,
      selectedItem.image,
      selectedItem.price,
      1
    );
    dispatch(addCart(newAddCart));
  };

  const goNavHandler = (e) => {
    switch (e.target.className) {
      case "c-goback":
        history.goBack();
        break;
      case "c-item__toOrder":
        history.push("/order");
        break;
      default:
        break;
    }
  };

  return (
    <main className="p-itemDetail l-layout">
      <p className="c-goback" onClick={goNavHandler}>
        <ion-icon
          style={{ fontSize: "20px", paddingRight: "5px" }}
          name="return-up-back-outline"
        />
        Quay lại
      </p>
      <h3 className="c-title">{selectedItem.name}</h3>
      <div className="c-item">
        <p className="c-item__image">
          <img src={selectedItem.image} alt={selectedItem.name} />
        </p>
        <div className="c-item__content">
          <p className="c-item__desc">{selectedItem.content}</p>
          <p className="c-item__price">
            Đơn giá: {transNum(selectedItem.price)} &#8363;
          </p>
          <div className="c-item__actions">
            <button onClick={addCartHandler}>Thêm vào giỏ hàng</button>
            <button onClick={goNavHandler} className="c-item__toOrder">
              Đến thanh toán
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
