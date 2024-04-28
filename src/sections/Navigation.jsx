import Button from "../components/Button";
import { navlinks } from "../constants";
import logo from "/images/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex items-center gap-2">
        <img src={logo} />
        <h3 className="text-[1.25rem]">
          Lasles<span className="font-bold">VPN</span>
        </h3>
      </div>
      <div className="nav-text hidden lg:flex gap-x-10 ">
        {navlinks.map((item) => (
          <div key={item.id} className="hover:text-black cursor-pointer">
            {item.title}
          </div>
        ))}
      </div>
      <div className="hidden lg:flex gap-x-8 items-center">
        <h3 className="font-bold text-base cursor-pointer hover:text-[#F53855]">
          Sign In
        </h3>
        <Button title="Sign Up" />
      </div>
      <div className="lg:hidden">
        <RxHamburgerMenu size="1.5em" />
      </div>
    </nav>
  );
};

export default Navigation;
