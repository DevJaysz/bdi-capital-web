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
    <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
      <img
        src={Logo}
        className="w-36 hover:scale-105 transition-all cursor-pointer"
        alt="Logo"
      />
      <ul className=" hidden md:flex  uppercase">
        <li className="p-4">Our Journey</li>
        <li className="p-4">Thrive with us</li>
        <li className="p-4">What we offer</li>
        <li className="p-4">Our people</li>
      </ul>

      <button className="md:flex hidden uppercase p-4 items-center space-x-2">
        <BsFillTelephoneFill className="text-lg" />
        <span>Contact us</span>
      </button>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <IoIosMenu size={30} /> : <IoIosClose size={30} />}
      </div>

      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-solid border-r-gray-800 bg-[#111111] uppercase ease-in-out duration-500 z-10"
            : " fixed left-[-100%]"
        }
      >
        <img
          src={Logo}
          className="w-36 hover:scale-105 transition-all cursor-pointer m-4"
          alt="Logo"
        />
        <li className="p-4 border-b border-gray-600">Our Journey</li>
        <li className="p-4 border-b border-gray-600">Thrive with us</li>
        <li className="p-4 border-b border-gray-600">What we offer</li>
        <li className="p-4 border-b border-gray-600">Our people</li>
        <li className="p-4">Contact us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
