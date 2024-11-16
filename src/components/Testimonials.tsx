import Image from "next/image";
import React, { MouseEventHandler } from "react";
import Slider from "react-slick";
import testimonialLogo1 from "../images/testimonialsLogo/1.png";
import testimonialLogo2 from "../images/testimonialsLogo/2.png";
import testimonialLogo3 from "../images/testimonialsLogo/3.png";
import testimonialLogo4 from "../images/testimonialsLogo/4.png";
import testimonialLogo5 from "../images/testimonialsLogo/5.png";
import testimonialLogo6 from "../images/testimonialsLogo/6.png";
import testimonialLogo7 from "../images/testimonialsLogo/7.png";

// Custom arrow components
interface ArrowProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomPrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button onClick={onClick} className="custom-arrow left-arrow">
    <i className="fa-solid fa-chevron-left text-white text-5xl"></i>
  </button>
);

const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button onClick={onClick} className="custom-arrow right-arrow">
    <i className="fa-solid fa-chevron-right text-white text-5xl"></i>
  </button>
);


const Testimonials = () => {
  const settings = {
    speed: 1000,
    swipe: true,
    infinite: true,
    dots:true,
    slidesToShow: 1,
    pauseOnFocus: false,
    autoplay:true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  
  return (
    
      <section className="testimonialBg py-16">
        <div className="container-custom">
          <div className="testimonialHeading text-white">
            <h5 className="text-xl font-bold text-center ">Clients Feedbacks</h5>
            <h2 className="text-5xl uppercase font-extrabold text-center mb-10">
              What&#39;s Our Clients Say About{" "}
              <span className="bg-orange-500 px-2 text-white">Catalyst</span>
            </h2>
          </div>
          <div className="py-10">
            <Slider className="pt-10" {...settings}>
              <div>
                <div className="testimonialBox p-10 text-center w-2/4 mx-auto">
                  <Image
                    className="w-24 mx-auto h-24 bg-white p-5 rounded-full"
                    src={testimonialLogo1}
                    alt=""
                  />
                  <div className="testimonialContent text-white  ">
                    <h4 className="py-5 text-xl font-semibold">Pakistan Stock Exchange (PSX)</h4>
                    <p>
                      CATALYST I.T Solutions has been a key partner in enhancing
                      our technological infrastructure. Their commitment to
                      excellence and their deep understanding of trading systems
                      have significantly contributed to the efficiency and
                      scalability of our operations. We look forward to
                      continued collaboration in the future.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="testimonialBox p-10 text-center w-2/4 mx-auto">
                  <Image
                    className="w-24 mx-auto h-24 bg-white p-5 rounded-full"
                    src={testimonialLogo2}
                    alt=""
                  />
                  <div className="testimonialContent text-white  ">
                    <h4 className="py-5 text-xl font-semibold">Central Depository Company (CDC)</h4>
                    <p>
                      Working with CATALYST I.T Solutions has been a highly
                      positive experience. Their advanced solutions and
                      exceptional customer support have made a real difference
                      in streamlining our processes. Their team is professional,
                      reliable, and always goes above and beyond to ensure
                      success.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="testimonialBox p-10 text-center w-2/4 mx-auto">
                  <Image
                    className="w-24 mx-auto h-24 bg-white p-5 rounded-full"
                    src={testimonialLogo3}
                    alt=""
                  />
                  <div className="testimonialContent text-white  ">
                    <h4 className="py-5 text-xl font-semibold">Pakistan Mercantile Exchange (PMEX)</h4>
                    <p>
                      CATALYST I.T Solutions has consistently delivered
                      top-notch trading solutions that meet our high standards
                      for security and efficiency. Their expertise in fintech
                      and commitment to innovation has made them an invaluable
                      partner for us.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="testimonialBox p-10 text-center w-2/4 mx-auto">
                  <Image
                    className="w-24 mx-auto h-24 bg-white p-5 rounded-full"
                    src={testimonialLogo4}
                    alt=""
                  />
                  <div className="testimonialContent text-white  ">
                    <h4 className="py-5 text-xl font-semibold">AKD Securities</h4>
                    <p>
                      The team at CATALYST I.T Solutions has been instrumental
                      in delivering an exceptional trading experience through
                      their customized solutions. Their attention to detail and
                      technical expertise ensure that our platform runs smoothly
                      and securely.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="testimonialBox p-10 text-center w-2/4 mx-auto">
                  <Image
                    className="w-24 mx-auto h-24 bg-white p-5 rounded-full"
                    src={testimonialLogo5}
                    alt=""
                  />
                  <div className="testimonialContent text-white  ">
                    <h4 className="py-5 text-xl font-semibold">Arif Habib Limited</h4>
                    <p>
                      CATALYST I.T Solutions has been a trusted partner,
                      delivering seamless trading solutions that have helped us
                      stay competitive in the market. Their dedication to
                      quality and customer satisfaction is unparalleled.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="testimonialBox p-10 text-center w-2/4 mx-auto">
                  <Image
                    className="w-24 mx-auto h-24 bg-white p-5 rounded-full"
                    src={testimonialLogo6}
                    alt=""
                  />
                  <div className="testimonialContent text-white  ">
                    <h4 className="py-5 text-xl font-semibold">JS Global</h4>
                    <p>
                      JS Global has had an outstanding experience working with
                      CATALYST I.T Solutions. Their innovative approach to
                      trading software has earned them multiple awards, and we
                      are proud to have them as a trusted partner. Their team is
                      dedicated, proactive, and committed to delivering
                      excellence.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="testimonialBox p-10 text-center w-2/4 mx-auto">
                  <Image
                    className="w-24 mx-auto h-24 bg-white p-5 rounded-full"
                    src={testimonialLogo7}
                    alt=""
                  />
                  <div className="testimonialContent text-white  ">
                    <h4 className="py-5 text-xl font-semibold">Al Habib Bank Limited</h4>
                    <p>
                      CATALYST I.T Solutions has played a pivotal role in
                      enhancing our trading operations. Their solutions are
                      reliable, cutting-edge, and tailored to meet our specific
                      needs. Their ongoing support has been exemplary.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    
  );
};

export default Testimonials;
