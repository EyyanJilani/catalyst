import Image from "next/image";
import designShape from "../images/designShape.png";
import { useEffect, useState } from "react";

const Services = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate rotation based on scroll position
      const scrollY = window.scrollY;
      const newRotation = scrollY * 0.1; // Adjust multiplier for slower rotation
      setRotation(newRotation);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="servicesSec py-20 relative">
        <div className="container-custom">
          <div className="flex items-center gap-5 ">
            <div className="w-2/4">
              <div>
                <span className="bgDesignImage">
                  <Image
                    layout="intrinsic"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      transition: "transform 0.2s linear", // Smooth rotation
                    }}
                    className="absolute w-2/5 opacity-10 top-9"
                    src={designShape}
                    alt="bgDesignImage"
                  />
                </span>
                <h5 className="text-xl font-bold ">
                  Empowering Solutions We Deliver
                </h5>
                <h2 className="text-5xl pt-5 leading-tight">
                  Powering Pakistan's Financial Markets with Cutting-Edge
                  Trading SolutionsSetting the Standard in Fintech Innovation
                  for Pakistan’s Markets{" "}
                </h2>
              </div>
            </div>
            <div className="w-2/4 border-l pl-7">
              <div className="py-5">
                <h3 className="text-2xl font-semibold py-3">
                  Electronic Trading Systems (ETS)
                </h3>
                <p>
                  Our Electronic Trading Systems (ETS) power equity and
                  commodity exchanges with scalable, high-performance technology
                  designed for seamless, secure, and fault-tolerant trading.
                  Supporting multi-asset trading, including equities,
                  derivatives, and forex, ETS offers real-time market data,
                  trade matching engines, and advanced risk management tools.
                </p>
                <p className="pt-2">
                  Leveraging AI, ML, and FIX Protocol compliance, ETS ensures
                  adaptability, precision, and transparency, helping exchanges
                  stay competitive in dynamic financial markets.
                </p>
              </div>
              <div className="py-5">
                <h3 className="text-2xl font-semibold py-3">
                  Next-Generation Mobile Trading Apps
                </h3>
                <p>
                  Experience the future of trading with our Next-Generation
                  Mobile Trading Apps, designed for investors and traders
                  seeking a seamless, feature-rich, and secure platform on the
                  go. These state-of-the-art apps redefine convenience, offering
                  real-time access to financial markets with tools that cater to
                  novice and seasoned investors alike.
                </p>
              </div>
              <div className="py-5">
                <h3 className="text-2xl font-semibold py-3">
                  Insurance Broker Back Office System
                </h3>
                <p>
                  Streamlining insurance operations with cutting-edge
                  technology, our Insurance Broker Back Office System is a
                  comprehensive solution tailored for insurance brokers,
                  agencies, and service providers. It redefines operational
                  efficiency by automating routine tasks, enhancing policy
                  management, and ensuring regulatory compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
