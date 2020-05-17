import React from "react";
import { Link } from "react-router-dom";

import "./_Card.scss";

export default (props) => {
  const item = props.item;
  return (
    <div className="c-cardOutline">
      <div className="c-card">
        <p className="c-card__image">
          <img src={item.image} alt="glasses" />
        </p>
        <div className="c-card__info">
          <h4 className="c-card__title">{item.name}</h4>
          <p className="c-card__price">
            {item.price}&#8363;<span>{item.price * 1.6}&#8363;</span>
          </p>
          <div class="c-card__actions">
            <Link className="c-card__detail" to="/shop">
              View
            </Link>
            <button className="c-card__cart">
              <ion-icon style={{ fontSize: "32px" }} name="cart"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
