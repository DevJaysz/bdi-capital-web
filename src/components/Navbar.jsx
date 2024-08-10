import { useState } from "react";
import Logo from "../assets/navbar/BDI Capital Logo PNG.png";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="sticky top-0 z-50 border-b shadow-slate-50 bg-[#111111]">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white cr">
        <img
          src={Logo}
          className="w-28 sm:w-32 md:w-28 lg:w-40 hover:scale-105 transition-all cursor-pointer"
          alt="Logo"
        />

        {/* Navbar Links */}
        <ul className="hidden md:flex space-x-4 uppercase font-gothic font-light cursor-pointer">
          <li className="p-2 text-xs md:text-sm lg:text-base">Our Journey</li>
          <li className="p-2 text-xs md:text-px] lg:text-base">
            Thrive with us
          </li>
          <li className="p-2 text-xs md:text-sm lg:text-base">What we offer</li>
          <li className="p-2 text-xs md:text-sm lg:text-base">Our people</li>
        </ul>

        {/* Contact Button */}
        <button className="hidden md:flex items-center uppercase p-2 text-xs md:text-sm lg:text-base space-x-2">
          <BsFillTelephoneFill />
          <span>Contact us</span>
        </button>

        {/* Mobile Menu Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <IoIosMenu size={30} /> : <IoIosClose size={30} />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] h-full border-r border-solid border-r-gray-800 bg-[#111111] uppercase ease-in-out duration-500 z-10"
              : "fixed left-[-100%]"
          }
        >
          <img
            src={Logo}
            className="w-28 sm:w-32 md:w-36 lg:w-40 hover:scale-105 transition-all cursor-pointer m-4"
            alt="Logo"
          />
          <li className="p-4 text-base border-b border-gray-600">
            Our Journey
          </li>
          <li className="p-4 text-base border-b border-gray-600">
            Thrive with us
          </li>
          <li className="p-4 text-base border-b border-gray-600">
            What we offer
          </li>
          <li className="p-4 text-base border-b border-gray-600">Our people</li>
          <li className="p-4 text-base">Contact us</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
