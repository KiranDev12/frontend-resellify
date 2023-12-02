// ProductCard.jsx

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductDetailPage from "./ProductDetailPage";
import login from "../../assets/login-img.jpg";
import "./ProductCard.css";
import { sliderSettings } from "../../utils/common";

function ProductCard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/fetch/products/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  return (
    <section className="r-wrapper">
      <div className="paddings  innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Products</span>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Swiper {...sliderSettings}>
            <SliderButtons />
            {data.map((product, i) => (
              <SwiperSlide key={i}>
                <div className={`flexColStart r-card flex-column`}>
                  <img
                    className="mb-2"
                    src={product.product_img} // Use the updated image URL
                    alt={product.product_name}
                  />
                  <span className="product-name text-gray-800">
                    {product.product_name}
                  </span>

                  <div
                    className={`category-name category-${
                      product.category_id % 7
                    }`}
                  >
                    {product.category_name}
                  </div>
                  <div className="price-rating-container">
                    <div className="price-container">
                      <span className="black font-thin text-sm r-price">
                        <span style={{ color: "black" }} className="pr-1">
                          $
                        </span>
                        {product.product_price}
                      </span>
                    </div>
                    <div className="rating-container">
                      <p className="secondaryText rating-container">
                        <FaStar
                          className="starIcon text-yellow-500"
                          style={{ WebkitTextStroke: "1px black" }}
                        />
                        <span className="black">{product.product_rating}</span>
                      </p>
                    </div>
                  </div>
                  <div className="seemore hover:underline">
                    <Link
                      className="text-sm text-gray-700"
                      to={`/products/${product.product_id}`}
                    >
                      See More
                    </Link>
                  </div>
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
