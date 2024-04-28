import { footer } from "../constants";
import logo from "/images/logo.svg";
const Footer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-10">
      <div className="flex items-center lg:items-start flex-col gap-y-5 col-span-2 flex-grow">
        <div className="flex items-center gap-2">
          <img src={logo} />
          <h3 className="text-[1.25rem]">
            Lasles<span className="font-bold">VPN</span>
          </h3>
        </div>
        <p className="text-center w-[80%] sm:w-[65%] lg:text-left">
          LaslesVPN is a private virtual network that has unique features and
          has high security.
        </p>
        <div className="flex gap-3">
          {footer.map((item) => (
            <div key={item}>
              <div className="p-1 flex items-center justify-center bg-white rounded-full drop-shadow-lg">
                <img src={item.icon} width={25} />
              </div>
            </div>
          ))}
        </div>
        <p>©2020LaslesVPN</p>
      </div>
      <div className="col-span-2 flex justify-around lg:justify-around py-2 gap-x-10">
        <div className="flex flex-col gap-y-5">
          <h3 className="font-semibold">Product</h3>
          <p>Download </p>
          <p>Pricing</p>
          <p>Locations</p>
          <p>Server</p>
          <p>Countries</p>
          <p>Blog</p>
        </div>
        <div className="flex flex-col gap-y-5">
          <h3 className="font-semibold">Engage</h3>
          <p>LaslesVPN ? </p>
          <p>FAQ</p>
          <p>Tutorials</p>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <div className="flex flex-col gap-y-5">
          <h3 className="font-semibold">Earn Money</h3>
          <p>Affiliate</p>
          <p>Become Partner</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
