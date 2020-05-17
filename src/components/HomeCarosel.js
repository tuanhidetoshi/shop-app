import React, { useState } from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./_HomeCarosel.scss";

import ItemCard from "./Card";

const NextArrows = (props) => {
  return (
    <div onClick={props.onClick} className="c-nextArrow">
      <ion-icon name="caret-forward-outline" />
    </div>
  );
};

const PrevArrows = (props) => {
  return (
    <div onClick={props.onClick} className="c-prevArrow">
      <ion-icon name="caret-back-outline" />
    </div>
  );
};

export default (props) => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrows />,
    prevArrow: <PrevArrows />,
  };
  return (
    <div className="c-carousel">
      <h3 className="c-carousel__header">{props.title}</h3>
      <Slider {...settings}>
        {props.list.map((item) => (
          <ItemCard item={item} />
        ))}
      </Slider>
    </div>
  );
};
