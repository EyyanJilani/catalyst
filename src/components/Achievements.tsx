import Image from "next/image";
import awardJS from "../images/awardJS.png";

const Achievements = () => {
  return (
    
      <section className="bgAchievement py-20 bg-cover bg-no-repeat">
        <div className="container-custom">
          <div className="flex items-center gap-10">
            <div className="w-2/4">
              <Image src={awardJS} alt="" />
            </div>
            <div className="w-2/4">
              <div className="achievementsContent text-white">
              <h5 className="text-xl font-bold ">
                  Our Achievement
                </h5>
                <h2 className="text-5xl pt-5">
                  Recognized Excellence in Fintech Innovation
                </h2>
                <p className="pt-5">
                  At CATALYST, our dedication to delivering exceptional
                  technology solutions has earned us numerous accolades and
                  industry recognition. From developing{" "}
                  <strong>award-winning trading applications</strong> like{" "}
                  <strong>JS InvestPro</strong> to setting benchmarks in the
                  capital markets, our work continues to drive success for our
                  clients. These achievements reflect our commitment to
                  innovation, excellence, and empowering financial institutions
                  to lead with confidence in a competitive landscape.
                </p>
                <div className="flex gap-20 py-5">
                  <div className="stats w-1/3 border-r border-orange-400">
                    <h2 className="text-9xl font-bold text-orange-500">24+</h2>
                    <p className="text-xl w-3/4">
                      Year&#39;s Experience in Digital Solutions
                    </p>
                  </div>
                  <div className="stats w-1/3">
                    <h2 className="text-9xl font-bold text-orange-500">48</h2>
                    <p className="text-xl w-3/4">Worldwide Happy Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default Achievements;
