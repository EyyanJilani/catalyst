// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
      // autoplay={{
      //   delay: 3000, // Set autoplay delay (e.g., 3000ms = 3 seconds)
      //   disableOnInteraction: false, // Continue autoplay after user interactions
      // }}
      speed={2000} // Set transition speed in ms (e.g., 1000ms = 1 second)
    >
      <SwiperSlide>
        <div className="bgSlider1 h-[90vh] py-36 flex items-center">
          <div className="container-custom">
            <div className="w-1/3">
              <h1 className="text-7xl text-white font-bold leading-none uppercase">
                Innovation. Excellence.{" "}
                <span className="bg-orange-400 p-2 inline-table">
                  Evolution
                </span>
              </h1>
              <p className="text-white py-7">
                Welcome to Catalyst – your hub for digital excellence. We excel
                in creating cutting-edge solutions customized to your
                requirements, fueling growth and triumph in the digital sphere.
                Collaborate with us and begin a journey of evolution.
              </p>
              <Link
                className="bg-white table my-2 py-3 px-6 rounded-full text-lg"
                href="/"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* Repeat for additional slides */}
      <SwiperSlide>
        <div className="bgSlider2 h-[90vh] py-36 flex items-center">
          <div className="container-custom">
            <div className="w-1/3">
              <h1 className="text-7xl text-white font-bold uppercase leading-none">
                Transforming the Way You
                <span className="bg-orange-400 p-2 inline-table">Trade</span>
              </h1>
              <p className="text-white py-5">
                We revolutionize trading with secure, scalable, and real-time
                fintech solutions that empower traders and institutions to stay
                ahead in the market.
              </p>
              <Link
                className="bg-white table my-2 py-3 px-6 rounded-full text-lg"
                href="/"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* Add more SwiperSlide components as needed */}
    </Swiper>
  );
};

export default HomeBanner;
