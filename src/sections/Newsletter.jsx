import Button2 from "../components/Button2";

const Newsletter = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-y-6 items-center lg:items-center justify-center bg-white rounded-xl drop-shadow-xl py-10 px-12 w-[90%] sm:w-[70%] lg:w-full mx-auto max-sm:mt-[400px]  mt-[400px] sm:mt-[350px] md:mt-[350px] lg:mt-[80px]  ">
      <div className="flex flex-col gap-y-2">
        <h3
          className="feature-header text-center lg:text-left lg:w-[60%]"
          style={{ lineHeight: "1.2" }}
        >
          Subscribe Now for Get Special Features!
        </h3>
        <p className="feature-sub-header text-center lg:text-left">
          Let&apos;s subscribe with us and find the fun.
        </p>
      </div>
      <div>
        <div className="z-10 w-[220px]">
          <button className=" bg-[#F53838] h-12 w-auto px-12 relative text-white rounded-lg font-semibold">
            Subscribe Now
            <div className="absolute h-6 w-28 z-[-1] mx-auto inset-x-0 flex items-center justify-center blur-xl bg-[#F53838]"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
