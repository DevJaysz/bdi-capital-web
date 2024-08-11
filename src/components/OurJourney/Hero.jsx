import Logo from "../../assets/navbar/BDI Capital Logo PNG.png";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import BusinessSheet from "../BusinessSheet/BusinessSheet";
import WhoareWe from "../WhoareWe/WhoareWe";
import TrackRecord from "../TrackRecord/TrackRecord";
import Timeline from "../Timeline/Timeline";

function Hero() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-start bg-[#111111] text-white px-4 pt-24">
        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="w-48 sm:w-64 md:w-80 lg:w-96 mb-4"
        />

        {/* Search bar */}
        <div className="relative w-full max-w-lg">
          <div className="border-2 border-gray-300 h-10 w-full rounded-full flex items-center">
            <FaSearch className="absolute left-4 text-gray-300 text-xl sm:text-xl lg:text-2xl" />
            <FaMicrophone className="absolute right-4 text-gray-300 text-xl sm:text-xl lg:text-2xl" />
          </div>
        </div>

        {/* Text and Arrow */}
        <div className="flex flex-col items-center justify-center text-center pt-8 space-y-4 font-centuryGothic ">
          <h2 className="text-lg sm:text-sm md:text-2xl lg:text-3xl">
            NEED ALL THE ANSWERS?
          </h2>
          <h2 className="text-lg sm:text-sm md:text-2xl lg:text-3xl">
            YOU ARE IN THE RIGHT PLACE
          </h2>
          <MdKeyboardDoubleArrowDown className="text-3xl sm:text-sm md:text-5xl lg:text-6xl animate-slow-bounce cursor-pointer" />
        </div>
      </div>
      <BusinessSheet />
      <WhoareWe />
      <TrackRecord />
      <Timeline />
    </>
  );
}

export default Hero;
