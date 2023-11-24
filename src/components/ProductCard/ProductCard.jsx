import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./ProductCard.css";
import { sliderSettings } from "../../utils/common";
import loginImg from "../../assets/login-img.jpg";
function ProductCard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/fetch/products/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false); // Set loading to false when data is available
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []); // The empty dependency array ensures the effect runs only once after the initial render.

  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Products</span>
        </div>
        {loading ? (
          // Display a loading message while data is being fetched
          <p>Loading...</p>
        ) : (
          <Swiper {...sliderSettings}>
            <SliderButtons />
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={loginImg} alt="" />
                  <span className="secondaryText r-price">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{card.product_price}</span>
                  </span>
                  <span className="3xl">{card.product_name}</span>
                  <div className="span secondaryText">{card.product_rating}</div>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

export default ProductCard;
