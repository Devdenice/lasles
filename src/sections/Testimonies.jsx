import { testimony } from "../constants";
import leftArrow from "/feedback/left.svg";
import rightArrow from "/feedback/right.svg";

const Testimonies = () => {
  return (
    <div className="mt-[380px] sm:mt-[700px] md:mt-[1150px] lg:mt-0">
      <div className="w-full relative ">
        <div className="text-center">
          <h1 className="header" style={{ lineHeight: "1.5" }}>
            Trusted by Thousands of Happy Customer
          </h1>
          <p className="sub-header mb-16">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:absolute lg:right-[-110px]  max-sm:w-[80%] max-lg:w-[60%] mx-auto">
          {testimony.map((testimonies, index) => (
            <div
              key={testimonies}
              className={`border-2 py-6 px-5 flex  flex-col rounded-xl border-[#DDDDDD] flex-grow ${
                index === 0 ? "border-[#F53838]" : ""
              }`}
            >
              <div className="flex justify-between mb-3">
                <div className="flex gap-x-3 items-center">
                  <img
                    src={testimonies.profile}
                    width={50}
                    height={50}
                    className="w-10 h-10 rounded-full object-contain"
                  />
                  <div>
                    <p>{testimonies.name}</p>
                    <p>{testimonies.location}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-x-2.5">
                    <p>{testimonies.rating}</p>
                    <img src={testimonies.icon} width={20} />
                  </div>
                </div>
              </div>
              <div className="">
                <p>{testimonies.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 w-full hidden lg:block">
        <div className="flex items-center justify-between ">
          <div className="flex flex-row gap-x-3">
            <div className="w-12 h-5 rounded-full bg-[#F53838] "></div>
            <div className="w-5 h-5 rounded-full bg-[#DDE0E4]"></div>
            <div className="w-5 h-5 rounded-full bg-[#DDE0E4]"></div>
            <div className="w-5 h-5 rounded-full bg-[#DDE0E4]"></div>
          </div>
          <div className="flex gap-x-4">
            <img src={leftArrow} width={50} height={50} className="w-10 h-10" />
            <img
              src={leftArrow}
              width={50}
              height={50}
              className="w-10 h-10 transform rotate-180"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
