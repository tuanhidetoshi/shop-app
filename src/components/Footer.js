import React from "react";
import { Link } from "react-router-dom";

import "./_Footer.scss";

export default (props) => {
  return (
    <div className="c-footer">
      <div className="c-footer__contain l-layout">
        <div className="c-footer__left">
          <ul className="c-footer__nav">
            <li className="c-footer__navItem">
              <Link className="c-footer__link" to="/">
                Home
              </Link>
            </li>
            <li className="c-footer__navItem">
              <Link className="c-footer__link" to="/about">
                About
              </Link>
            </li>
            <li className="c-footer__navItem">
              <Link className="c-footer__link" to="/news">
                News
              </Link>
            </li>
            <li className="c-footer__navItem">
              <Link className="c-footer__link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="c-footer__navItem">
              <Link className="c-footer__link" to="/shop">
                Shop
              </Link>
            </li>
          </ul>
        </div>
        <div className="c-footer__right">
          <h3 className="c-footer__logo">
            <img src="https://via.placeholder.com/100x70" alt="footer logo" />
          </h3>
          <p className="c-footer__address">
            Địa chỉ: <span>xxx Nguyễn Trọng Tuyển, P.1, Q.Tân Bình, TPHCM</span>
          </p>
          <p className="c-footer__phone">
            Số điện thoại: <span>0903574793</span>
          </p>
          <ul className="c-footer__icon">
            <li className="c-footer__iconContain">
              <a
                href="https://www.facebook.com/profile.php?id=100029290658028"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon
                  style={{ color: "#4267b2", fontSize: "36px" }}
                  name="logo-facebook"
                ></ion-icon>
              </a>
            </li>
            <li className="c-footer__iconContain">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon
                  style={{ color: "#f00", fontSize: "36px" }}
                  name="logo-youtube"
                ></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="c-footer__copyright">
        <p>&copy; Bản quyền và thiết kế bởi Tuấn 2020</p>
      </div>
    </div>
  );
};
