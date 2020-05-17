import React from "react";
import "./_Home.scss";

import { NavLink } from "react-router-dom";
import HomeCarosel from "../components/HomeCarosel";
import New from "../components/News";

import data from "../data/dummy-data";

export default () => {
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
          <HomeCarosel list={data.shop} title={"Hàng mới về"} />
        </div>
      </section>
      <section>
        <div className="l-layout">
          <HomeCarosel list={data.shop} title={"Bán chạy nhất"} />
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
