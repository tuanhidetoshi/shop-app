import React from "react";
import data from "../data/dummy-data";

import "./_NewsDetail.scss";

export default (props) => {
  const selectedNew = data.news.find(
    (item) => item.id.toString() === props.match.params.id
  );
  return (
    <main className="p-newsDetail l-layout">
      <h3 className="c-title">{selectedNew.title}</h3>
      <p className="p-newsDetail__image">
        <img src={selectedNew.image} alt={selectedNew.title} />
      </p>
      <div className="c-line">
        <hr />
      </div>
      <div>
        <p className="p-newsDetail__content">{selectedNew.content}</p>
      </div>
    </main>
  );
};
