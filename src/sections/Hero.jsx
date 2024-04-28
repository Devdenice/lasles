import Button2 from "../components/Button2";
import hero from "/images/hero.svg";

const Hero = () => {
  return (
    <div className="lg:flex  items-center justify-center py-8">
      <div className="text-center lg:text-left max-sm:w-[70%] sm:w-[60%] lg:w-[79%] mx-auto ">
        <h1
          className="header-hero mb-5 pr-2 lg:max-w-[500px]"
          style={{ lineHeight: "1.2" }}
        >
          Want anything to be easy with
          <span className="font-bold"> LaslesVPN.</span>
        </h1>
        <p className="sub-header-hero mb-10 px-6 lg:px-0 lg:max-w-[550px] ">
          Provide a network for all your needs with ease and fun using
          <span className="font-semibold"> LaslesVPN </span>
          discover interesting features from us.
        </p>
        <Button2 title="Get Started" />
      </div>
      <div className="w-[70%] mx-auto mt-20 lg:mt-0">
        <img src={hero} height={600} width={600} className="ml-auto" />
      </div>
    </div>
  );
};

export default Hero;
