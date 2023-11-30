import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import hero from "../../assets/hero.jpg";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  const [countProducts, setCountProducts] = useState(0);
  const [countMerchants, setCountMerchants] = useState(0);

  useEffect(() => {
    const productsInterval = setInterval(() => {
      setCountProducts((prevCount) => prevCount + 1);
    }, 10);

    const merchantsInterval = setInterval(() => {
      setCountMerchants((prevCount) => prevCount + 1);
    }, 20);

    // Clear intervals on component unmount
    return () => {
      clearInterval(productsInterval);
      clearInterval(merchantsInterval);
    };
  }, []);

  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
        <div className="flex flex-col justify-start gap-4">
          <p className="py-2 text-2xl text-[#20B486] font-medium">
            Revolutionize Reselling
          </p>
          <h1 className="md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold">
            Access To{" "}
            <span className="text-[#20B486]">
              <CountUp start={2500} end={5000} duration={1.5} />+
            </span>
            {" "}
            products from{" "}
            <span className="text-[rgb(32,180,134)]">
              <CountUp start={100} end={300} duration={1.5} />+
            </span>
            {" "}
            certified merchants.
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Your Stuff, Your Store: Welcome to the Next-Gen Marketplace!
          </p>

          <form className="bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between">
            <input
              className="bg-white"
              type="text"
              placeholder="What do you want to shop?"
            />
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#000" }}
              />
            </button>
          </form>
        </div>

        <img src={hero} className="hero-img md:order-last  order-first" />
      </div>
    </div>
  );
};

export default Hero;
