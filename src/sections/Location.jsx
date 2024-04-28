import { socials } from "../constants";
import map from "/map/map.svg";

const Location = () => {
  return (
    <div className="w-full mt-[1180px] sm:mt-[1700px] md:mt-[2400px] lg:mt-0">
      <div className="text-center">
        <h1 className="header" style={{ lineHeight: "1.5" }}>
          Huge Global Network of Fast VPN
        </h1>
        <p className="sub-header">
          See LaslesVPN everywhere to make it easier for you when you move
          locations.
        </p>
      </div>
      <div className="mt-16 lg:mt-32">
        <img src={map} width={950} alt="Map" className="mx-auto" />
      </div>
      <div className="flex items-center justify-center mt-5">
        {socials.map((item) => (
          <div key={item} className="flex flex-grow items-center">
            <img src={item.social} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
