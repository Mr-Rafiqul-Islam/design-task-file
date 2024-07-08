import React from "react";
import { RiHome6Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { RiPlayList2Fill } from "react-icons/ri";
import { PiGameControllerDuotone } from "react-icons/pi";
import { IoAmericanFootball } from "react-icons/io5";
import tv from "../../assets/icons/tv.svg";
import Image from "../Image";
function Navbar({ className }) {
  // btn list
  const navBtn = [
    {
      icon: (
        <RiHome6Line  className="text-[#E2E2E2] lg:text-xl 2xl:text-2xl" />
      ),
      text: "Home",
    },
    {
      icon: <FiSearch  className="text-[#E2E2E2] lg:text-xl 2xl:text-2xl" />,
      text: "search",
    },
    {
      icon: (
        <HiOutlineVideoCamera
          
          className="text-[#E2E2E2] lg:text-xl 2xl:text-2xl"
        />
      ),
      text: "Live",
    },
    {
      icon: (
        <RiPlayList2Fill
          
          className="text-[#E2E2E2] lg:text-xl 2xl:text-2xl"
        />
      ),
      text: "add to playlist",
    },
    {
      icon: (
        <Image src={tv}  className="text-[#E2E2E2] lg:w-[18px] 2xl:w-[24px]" />
      ),
      text: "watchlist",
    },
    {
      icon: (
        <PiGameControllerDuotone
          
          className="text-[#E2E2E2] lg:text-xl 2xl:text-2xl"
        />
      ),
      text: "gaming",
    },
    {
      icon: (
        <IoAmericanFootball
          
          className="text-[#E2E2E2] lg:text-xl 2xl:text-2xl"
        />
      ),
      text: "sports",
    },
  ];
  return (
    <nav className={`absolute z-10 lg:top-[90px] xl:top-[150px] lg:right-[50px] min-1800:!top-[210px] hidden lg:block ${className}`}>
      <div className="bg-white/10 lg:w-[70px] 2xl:w-[95px] flex flex-col items-center justify-center lg:gap-y-[10px] 2xl:gap-y-[18px] rounded-full py-5">
        {/* btns */}
        {navBtn.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center cursor-pointer bg-white/20 rounded-full border border-white/40 hover:border-gradient gap-x-4 group lg:w-[50px] lg:h-[50px] 2xl:w-[64.14px] 2xl:h-[64.14px] lg:hover:w-[150px] 2xl:hover:w-[196px] hover:flex-row-reverse duration-300"
          >
            {item.icon}
            <p className="hidden transition-all duration-300 group-hover:block font-bigShoulder lg:text-sm 2xl:text-[18px] font-bold uppercase leading-[34px] text-white">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
