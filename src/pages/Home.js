import React from "react";
import "./_Home.scss";

import { NavLink } from "react-router-dom";
import HomeCarosel from "../components/HomeCarosel";
import New from "../components/News";

import { useSelector } from "react-redux";

export default () => {
  const shop = useSelector((state) => state.shop.shop);
  const bestShop = shop.filter((item) => item.quantity >= 50);
  const newShop = shop.filter(
    (item) =>
      Math.floor(Date.now() / 1000) - item.addedDate < 0.5 * 365 * 24 * 60 * 60
  );
  return (
    <main>
      <section className="c-mainview">
        <div className="c-mainview__contain">
          <img src={require("../assets/images/mainview.jpg")} alt="mainview" />
          <div className="c-mainview__context">
            <h3 className="c-mainview__main">
              Hãy bảo vệ đôi mắt, cửa sổ tâm hồn
            </h3>
            <p className="c-mainview__sub">
              Hàng Trung Quốc, giá rẻ, chất lượng cũng ...rẻ, mại dô
            </p>
            <NavLink className="c-mainview__btn" to="/shop">
              Go to Shop
            </NavLink>
          </div>
        </div>
      </section>
      <section>
        <div className="l-layout">
          <HomeCarosel list={bestShop} title={"Hàng mới về"} />
        </div>
      </section>
      <section>
        <div className="l-layout">
          <HomeCarosel list={newShop} title={"Bán chạy nhất"} />
        </div>
      </section>
      {/* <section>Feature</section>
      <section>Advertise</section> */}
      <section>
        <New filters={{ num: 4 }} />
      </section>
    </main>
  );
};
