import check from "/features/check.svg";
import feature from "/features/feature.svg";

const Features = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-y-12 items-center justify-between">
      <div className="w-[70%] mx-auto">
        <img src={feature} />
      </div>
      <div className="w-full max-sm:w-9/12 sm:w-10/12 md:w-8/12 lg:w-6/12 flex flex-col gap-y-6 ">
        <h2 className="feature-header lg:pr-10" style={{ lineHeight: "1.4" }}>
          We Provide Many Features You Can Use
        </h2>
        <p className="feature-sub-header">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <div>
          <div className="flex gap-x-2">
            <img src={check} />
            <p className="feature-sub-header">Powerfull online protection.</p>
          </div>
          <div className="flex gap-x-2">
            <img src={check} />
            <p className="feature-sub-header">Internet without borders.</p>
          </div>
          <div className="flex gap-x-2">
            <img src={check} />
            <p className="feature-sub-header">Supercharged VPN</p>
          </div>
          <div className="flex gap-x-2">
            <img src={check} />
            <p className="feature-sub-header">No specific time limits.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
