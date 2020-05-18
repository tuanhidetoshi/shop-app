import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

import "./_News.scss";

import { useSelector } from "react-redux";

const NewItem = (props) => {
  const history = useHistory();
  const toNewsHandler = (id) => {
    history.push(`/news/${id}`);
  };
  const news = props.news;
  const convertedDate = moment.unix(news.date).format("DD/MM/YYYY");
  return (
    <div className="c-news__item">
      <p className="c-news__image">
        <img onClick={() => toNewsHandler(news.id)} src={news.image} alt="" />
      </p>
      <div className="c-news__content">
        <p className="c-news__date">
          Đăng vào ngày: <span>{convertedDate}</span>
        </p>
        <h3 onClick={() => toNewsHandler(news.id)} className="c-news__title">
          {news.title}
        </h3>

        <p className="c-news__txt">{news.content.slice(0, 200) + "..."}</p>
      </div>
    </div>
  );
};

export default (props) => {
  const news = useSelector((state) => state.news.news);
  const [renderList, setRenderList] = useState(news);

  useEffect(() => {
    if (props.filters?.type !== null && props.filters?.type !== undefined) {
      setRenderList((renderList) =>
        news.filter((item) => item.category === props.filters.type)
      );
    } else {
      setRenderList((renderList) => [...news]);
    }
    if (props.filters?.num !== null && props.filters?.num !== undefined) {
      setRenderList((renderList) =>
        renderList.slice(0, parseInt(props.filters.num))
      );
    }
  }, [props, news]);

  return (
    <div className="c-news l-layout">
      {renderList.map((news) => {
        return <NewItem key={news.id} news={news} />;
      })}
    </div>
  );
};
