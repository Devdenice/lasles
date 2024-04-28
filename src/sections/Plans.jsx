import Button from "../components/Button";
import { plans } from "../constants";

const Plans = () => {
  return (
    <div className="mt-[850px] sm:mt-[1100px] md:mt-[1450px] lg:mt-0">
      <div className="text-center mb-16">
        <h1 className="header">Choose Your Plan</h1>
        <p className="sub-header ">
          Let&apos;s choose the package that is best for you and explore it
          happily and cheerfully.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div key={plan} className="flex flex-col items-center">
            <div
              className={`border-2 border-[#DDDDDD] ${
                index === 2 ? "border-[#F53838]" : ""
              }  cursor-pointer rounded-lg py-4 md:py-8 px-10 md:px-12 flex flex-col items-center gap-y-4 justify-between flex-grow`}
            >
              <div className="flex flex-col items-center gap-y-6">
                <img src={plan.img} />
                <h3 className="font-bold feature-sub-header text-black">
                  {plan.title}
                </h3>
                <div className="flex flex-col gap-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex">
                      <img src={feature.icon} />
                      <p className="feature-sub-header">{feature.info}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-3 mt-8">
                <p className="font-bold feature-sub-header text-black">
                  {plan.price}
                </p>
                {index === 0 || index === 1 ? (
                  <>
                    <Button title="Select" />
                  </>
                ) : (
                  <>
                    <Button title="Select" red="red" />
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
