import React, { useState } from "react";
import "./_News.scss";

import New from "../components/News";

export default () => {
  const [filterType, setFilterType] = useState(null);
  const onClickHandler = (e) => {
    const type = e.target.dataset.type;
    if (type !== "") {
      setFilterType(type);
    } else {
      setFilterType(null);
    }
  };
  return (
    <main className="p-news l-layout">
      <h3 className="c-title">Tổng hợp tin tức</h3>
      <div className="c-buttonGroup">
        <button
          data-type=""
          className={`c-buttonGroup__btn ${
            filterType === null ? "active" : ""
          }`}
          onClick={onClickHandler}
        >
          Tất cả
        </button>
        <button
          data-type="fashion"
          className={`c-buttonGroup__btn ${
            filterType === "fashion" ? "active" : ""
          }`}
          onClick={onClickHandler}
        >
          Thời trang
        </button>
        <button
          data-type="healthy"
          className={`c-buttonGroup__btn ${
            filterType === "healthy" ? "active" : ""
          }`}
          onClick={onClickHandler}
        >
          Sức khỏe
        </button>
        <button
          data-type="info"
          className={`c-buttonGroup__btn ${
            filterType === "info" ? "active" : ""
          }`}
          onClick={onClickHandler}
        >
          Kiến thức
        </button>
        <button
          data-type="promotion"
          className={`c-buttonGroup__btn ${
            filterType === "promotion" ? "active" : ""
          }`}
          onClick={onClickHandler}
        >
          Khuyến mãi
        </button>
      </div>
      <New filters={{ type: filterType }} />
    </main>
  );
};
