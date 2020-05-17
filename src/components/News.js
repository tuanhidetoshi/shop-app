import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./_News.scss";
import NewsItem from "../models/NewsItem";

const NewItem = (props) => {
  const history = useHistory();
  const toNewsHandler = (id) => {
    history.push(`/news/${id}`);
  };
  const news = props.news;
  return (
    <div className="c-news__item">
      <p className="c-news__image">
        <img
          onClick={() => toNewsHandler(news.id)}
          src="https://nab.org.uk/wp-content/uploads/2018/09/sight-loss.jpg"
          alt=""
        />
      </p>
      <div className="c-news__content">
        <p className="c-news__date">
          Đăng vào ngày: <span>{news.date}</span>
        </p>
        <h3 onClick={() => toNewsHandler(news.id)} className="c-news__title">
          {news.title}
        </h3>

        <p className="c-news__txt">{news.content}</p>
      </div>
    </div>
  );
};

export default (props) => {
  const [newsList, setNewsList] = useState([
    new NewsItem(
      1,
      "Bảo vệ mắt",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos aspernatur perferendis culpa veniam quod, ullam inventore quisquam minima optio, molestiae impedit, dolorum nesciunt expedita sit?",
      "16/05/2020",
      "healthy"
    ),
    new NewsItem(
      2,
      "Thuốc bổ mắt",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos aspernatur perferendis culpa veniam quod, ullam inventore quisquam minima optio, molestiae impedit, dolorum nesciunt expedita sit?",
      "16/05/2020",
      "healthy"
    ),
    new NewsItem(
      3,
      "Kính thời trang",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos aspernatur perferendis culpa veniam quod, ullam inventore quisquam minima optio, molestiae impedit, dolorum nesciunt expedita sit?",
      "16/05/2020",
      "fashion"
    ),
    new NewsItem(
      4,
      "Cách sử dụng kính thuốc",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos aspernatur perferendis culpa veniam quod, ullam inventore quisquam minima optio, molestiae impedit, dolorum nesciunt expedita sit?",
      "16/05/2020",
      "info"
    ),
    new NewsItem(
      5,
      "Thông tin khuyến mãi tháng 5/2020",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos aspernatur perferendis culpa veniam quod, ullam inventore quisquam minima optio, molestiae impedit, dolorum nesciunt expedita sit?",
      "16/05/2020",
      "promotion"
    ),
    new NewsItem(
      6,
      "Thông tin khuyến mãi tháng 4/2020",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos aspernatur perferendis culpa veniam quod, ullam inventore quisquam minima optio, molestiae impedit, dolorum nesciunt expedita sit?",
      "16/05/2020",
      "promotion"
    ),
    new NewsItem(
      7,
      "Thông tin khuyến mãi tháng 3/2020",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos aspernatur perferendis culpa veniam quod, ullam inventore quisquam minima optio, molestiae impedit, dolorum nesciunt expedita sit?",
      "16/05/2020",
      "promotion"
    ),
    new NewsItem(
      8,
      "Thông tin khuyến mãi tháng 2/2020",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos aspernatur perferendis culpa veniam quod, ullam inventore quisquam minima optio, molestiae impedit, dolorum nesciunt expedita sit?",
      "16/05/2020",
      "promotion"
    ),
    new NewsItem(
      9,
      "Khuyến mãi mừng khai trương cửa hàng",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos aspernatur perferendis culpa veniam quod, ullam inventore quisquam minima optio, molestiae impedit, dolorum nesciunt expedita sit?",
      "16/05/2020",
      "promotion"
    ),
    new NewsItem(
      10,
      "Ngày khai trương cửa hàng",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos aspernatur perferendis culpa veniam quod, ullam inventore quisquam minima optio, molestiae impedit, dolorum nesciunt expedita sit?",
      "16/05/2020",
      "info"
    ),
  ]);
  const [renderList, setRenderList] = useState(newsList);

  useEffect(() => {
    if (props.filters?.type !== null && props.filters?.type !== undefined) {
      setRenderList((renderList) =>
        newsList.filter((item) => item.category === props.filters.type)
      );
    } else {
      setRenderList((renderList) => [...newsList]);
    }
    if (props.filters?.num !== null && props.filters?.num !== undefined) {
      setRenderList((renderList) =>
        renderList.slice(0, parseInt(props.filters.num))
      );
    }
  }, [props, newsList]);

  return (
    <div className="c-news l-layout">
      {renderList.map((news) => {
        return <NewItem news={news} />;
      })}
    </div>
  );
};
