import React, { useState } from "react";
import "./_Shop.scss";

import Card from "../components/Card";

import data from "../data/dummy-data";

export default () => {
  const [shop, setShop] = useState([...data.shop]);
  const [currentShop, setCurrentShop] = useState([...shop]);
  return (
    <main className="l-layout p-shop">
      <h3 className="c-title">Cửa hàng</h3>
      <div className="c-shop">
        <div className="c-sidebar">
          <h4 className="c-sidebar__title">Bộ lọc sản phẩm</h4>
          <div className="c-sidebar__catFil">
            <label htmlFor="men">
              <input id="men" type="checkbox" value="men" /> Cho nam giới
              <span />
            </label>
            <label htmlFor="women">
              <input id="women" type="checkbox" value="women" /> Cho nữ giới
              <span />
            </label>
            <label htmlFor="discount">
              <input id="discount" type="checkbox" value="discount" /> Giá tốt
              <span />
            </label>
            <label htmlFor="fashion">
              <input id="fashion" type="checkbox" value="fashion" /> Thời trang
              <span />
            </label>
            <label htmlFor="sport">
              <input id="sport" type="checkbox" value="sport" /> Thể thao
              <span />
            </label>
          </div>
        </div>
        <div className="c-shop__contain">
          {currentShop.map((item) => (
            <Card item={item} />
          ))}
        </div>
      </div>
    </main>
  );
};
