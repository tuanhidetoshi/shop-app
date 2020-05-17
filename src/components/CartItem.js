import React, { useState } from "react";
import "./_CartItem.scss";

export default (props) => {
  const [quantity, setQuantity] = useState(props.item.quantity);

  const onAdd = () => {
    setQuantity(quantity + 1);
  };

  const onMinus = () => {
    if (quantity >= 2) {
      setQuantity(quantity - 1);
    } else {
      props.removeItemCart(props.item.id);
    }
  };

  return (
    <li className="c-dropdown__item">
      <p>
        <img src="https://via.placeholder.com/75x75/" alt="item 1" />
      </p>
      <div className="c-dropdown__info">
        <h4 className="c-dropdown__prodname">{props.item.name}</h4>
        <p>
          <span>{props.item.price}</span>&nbsp;X&nbsp;<span>{quantity}</span>
        </p>
        <p>
          =<span>&nbsp;{props.item.price * quantity}</span>&#8363;
        </p>
      </div>
      <div className="c-dropdown__actions">
        <ion-icon onClick={onMinus} name="remove-circle-outline"></ion-icon>
        <ion-icon onClick={onAdd} name="add-circle-outline"></ion-icon>
      </div>
    </li>
  );
};
