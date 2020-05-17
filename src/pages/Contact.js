import React from "react";
import "./_Contact.scss";

export default () => {
  return (
    <main className="p-contact l-layout">
      <h3 className="c-title">Liên hệ</h3>
      <div className="c-contact">
        <div className="c-contact__left">
          <h4 className="c-contact__maptitle">Địa chỉ liên hệ</h4>
          <iframe
            title="shop map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.13606971598!2d106.6633424145376!3d10.800888892304963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292fe33e6ca3%3A0x30a1cbb2b5d98dbf!2zQ8O0bmcgdmnDqm4gSG_DoG5nIFbEg24gVGjhu6U!5e0!3m2!1svi!2s!4v1589729244941!5m2!1svi!2s"
            allowFullScreen
            tabindex={"0"}
          ></iframe>
        </div>
        <div className="c-contact__right">
          <h4 className="c-contact__title">Điền nội dung liên lạc</h4>
          <form className="c-contact__form">
            <label htmlFor="name">Họ và tên:</label>
            <input placeholder={`Họ & tên`} id="name" type="text" />
            <span className="c-lin  e">
              <hr />
            </span>
            <label htmlFor="email">Email:</label>
            <input placeholder="Email của bạn" id="email" type="email" />
            <span className="c-line">
              <hr />
            </span>
            <label htmlFor="phone">Số điện thoại:</label>
            <input placeholder="Điện thoại liên hệ" id="phone" type="phone" />
            <span className="c-line">
              <hr />
            </span>
            <label htmlFor="text">Nội dung:</label>
            <textarea placeholder="Nội dung nhắn gửi" id="text" />
            <button className="c-contact__submit" type="submit">
              Gửi
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
