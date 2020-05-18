import React, { useState, useEffect } from "react";
import "./_Shop.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchShop } from "../store/actions/shop";
import Card from "../components/Card";

import { transNum } from "../helper/transNum";

export default () => {
  const stepVal = 25000;
  const dispatch = useDispatch();
  const shop = useSelector((state) => state.shop.shop);

  // Sort moi len truoc
  shop.sort((a, b) => b.addedDate - a.addedDate);
  const [currentShop, setCurrentShop] = useState(shop);
  const [filterArr, setFilterArr] = useState([]);
  const [slideVal, setSlideVal] = useState([0, 100]);

  const Range = Slider.Range;

  const onCheckHandler = (e) => {
    const val = e.target.value;
    if (e.target.checked) {
      setFilterArr((filterArr) => [...filterArr, val]);
    } else {
      setFilterArr((filterArr) => filterArr.filter((item) => item !== val));
    }
  };

  const checkIncludeArr = (arr1, arr2) => {
    return arr1.every((e) => arr2.indexOf(e) >= 0);
  };

  const onSliderChange = (v) => {
    setSlideVal((slideVal) => [...v]);
  };

  const onMinClickHandler = (e) => {
    let newSliderVal;
    if (e.target.name === "remove-outline" && slideVal[0] > 0) {
      newSliderVal = [...slideVal];
      newSliderVal[0] -= 1;
      setSlideVal([...newSliderVal]);
    }
    if (e.target.name === "add-outline" && slideVal[0] < slideVal[1]) {
      newSliderVal = [...slideVal];
      newSliderVal[0] += 1;
      setSlideVal([...newSliderVal]);
    }
  };

  const onMaxClickHandler = (e) => {
    let newSliderVal;
    if (e.target.name === "remove-outline" && slideVal[1] > slideVal[0]) {
      newSliderVal = [...slideVal];
      newSliderVal[1] -= 1;
      setSlideVal([...newSliderVal]);
    }
    if (e.target.name === "add-outline" && slideVal[1] < 100) {
      newSliderVal = [...slideVal];
      newSliderVal[1] += 1;
      setSlideVal([...newSliderVal]);
    }
  };

  useEffect(() => {
    if (shop.length === 0) {
      dispatch(fetchShop());
    }
    if (filterArr.length > 0) {
      setCurrentShop((currentShop) =>
        shop.filter(
          (item) =>
            checkIncludeArr(filterArr, item.category) &&
            item.price >= slideVal[0] * stepVal &&
            item.price <= slideVal[1] * stepVal
        )
      );
    } else {
      setCurrentShop((currentShop) =>
        shop.filter(
          (item) =>
            item.price >= slideVal[0] * stepVal &&
            item.price <= slideVal[1] * stepVal
        )
      );
    }
  }, [filterArr, slideVal, dispatch, shop]);

  return (
    <main className="l-layout p-shop">
      <h3 className="c-title">Cửa hàng</h3>
      <div className="c-shop">
        <div className="c-sidebar">
          <h4 className="c-sidebar__title">Bộ lọc sản phẩm</h4>
          <div className="c-sidebar__catFil">
            <label htmlFor="men">
              <input
                onChange={onCheckHandler}
                id="men"
                type="checkbox"
                value="men"
              />
              Cho nam giới -&nbsp;
              {
                shop.filter((item) => item.category.indexOf("men") !== -1)
                  .length
              }
              sp
              <span />
            </label>
            <label htmlFor="women">
              <input
                onChange={onCheckHandler}
                id="women"
                type="checkbox"
                value="women"
              />
              Cho nữ giới -&nbsp;
              {
                shop.filter((item) => item.category.indexOf("women") !== -1)
                  .length
              }
              sp
              <span />
            </label>
            <label htmlFor="discount">
              <input
                onChange={onCheckHandler}
                id="discount"
                type="checkbox"
                value="discount"
              />
              Giá tốt -&nbsp;
              {
                shop.filter((item) => item.category.indexOf("discount") !== -1)
                  .length
              }
              sp
              <span />
            </label>
            <label htmlFor="fashion">
              <input
                onChange={onCheckHandler}
                id="fashion"
                type="checkbox"
                value="fashion"
              />
              Thời trang -&nbsp;
              {
                shop.filter((item) => item.category.indexOf("fashion") !== -1)
                  .length
              }
              sp
              <span />
            </label>
            <label htmlFor="sport">
              <input
                onChange={onCheckHandler}
                id="sport"
                type="checkbox"
                value="sport"
              />
              Thể thao -&nbsp;
              {
                shop.filter((item) => item.category.indexOf("sport") !== -1)
                  .length
              }
              sp
              <span />
            </label>
          </div>
          <div className="c-sidebar__slider">
            <Range
              allowCross={false}
              value={slideVal}
              onChange={onSliderChange}
            />
          </div>
          <div className="c-sidebar__info">
            <label className="c-sidebar__val">
              <p>Thấp nhất:</p>
              <div className="c-sidebar__input">
                <ion-icon
                  onClick={onMinClickHandler}
                  name="remove-outline"
                ></ion-icon>
                <input
                  type="text"
                  value={transNum(slideVal[0] * stepVal)}
                  disabled
                />
                <ion-icon
                  onClick={onMinClickHandler}
                  name="add-outline"
                ></ion-icon>
              </div>
            </label>
            <label className="c-sidebar__val">
              <p>Cao nhất:</p>
              <div className="c-sidebar__input">
                <ion-icon
                  onClick={onMaxClickHandler}
                  name="remove-outline"
                ></ion-icon>
                <input
                  type="text"
                  value={transNum(slideVal[1] * stepVal)}
                  disabled
                />
                <ion-icon
                  onClick={onMaxClickHandler}
                  name="add-outline"
                ></ion-icon>
              </div>
            </label>
          </div>
        </div>
        <div className="c-shop__contain">
          {currentShop.length > 0 ? (
            currentShop.map((item) => <Card key={item.id} item={item} />)
          ) : (
            <p className="c-shop__empty">Không tìm thấy kết quả phù hợp</p>
          )}
        </div>
      </div>
    </main>
  );
};
