import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./ProductCard.css";
// import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import { useState } from "react";
function ProductCard() {
  const [data, setData] = useState([]);
  //   [
  //     {
  //         "product_id": 123,
  //         "product_name": "Necklace",
  //         "product_desc": "Gold",
  //         "product_date": "2020-05-07",
  //         "product_rating": 4.2,
  //         "product_life": 2,
  //         "product_price": 999,
  //         "product_img": null,
  //         "merchant_id": 1445
  //     }
  fetch("http://127.0.0.1:8000/fetch/products/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return setData(data);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Products</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.product_img} alt="" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.product_price}</span>
                </span>
                <span className="primaryText">{card.product_name}</span>
                <div className="span secondaryText">{card.product_desc}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProductCard;
const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
