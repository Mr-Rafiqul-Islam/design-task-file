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
        <RiHome6Line size={24} className="text-[#E2E2E2] group-hover:ms-3" />
      ),
      text: "Home",
    },
    {
      icon: <FiSearch size={24} className="text-[#E2E2E2] group-hover:ms-3" />,
      text: "search",
    },
    {
      icon: (
        <HiOutlineVideoCamera
          size={24}
          className="text-[#E2E2E2] group-hover:ms-3"
        />
      ),
      text: "Live",
    },
    {
      icon: (
        <RiPlayList2Fill
          size={24}
          className="text-[#E2E2E2] group-hover:ms-3"
        />
      ),
      text: "add to playlist",
    },
    {
      icon: (
        <Image src={tv} size={24} className="text-[#E2E2E2] group-hover:ms-3" />
      ),
      text: "watchlist",
    },
    {
      icon: (
        <PiGameControllerDuotone
          size={24}
          className="text-[#E2E2E2] group-hover:ms-3"
        />
      ),
      text: "gaming",
    },
    {
      icon: (
        <IoAmericanFootball
          size={24}
          className="text-[#E2E2E2] group-hover:ms-3"
        />
      ),
      text: "sports",
    },
  ];
  return (
    <nav className={`absolute top-[210px] z-10 right-[50px] ${className}`}>
      <div className="bg-white/10 w-[95px] flex flex-col items-center justify-center gap-y-[18px] rounded-full py-5">
        {/* btns */}
        {navBtn.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center cursor-pointer bg-white/20 rounded-full border border-white/40 hover:border-gradient gap-x-4 group w-[64.14px] h-[64.14px] hover:w-[196px] hover:flex-row-reverse duration-300"
          >
            {item.icon}
            <p className="hidden transition-all duration-300 group-hover:block font-bigShoulder text-[18px] font-bold uppercase leading-[34px] text-white">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
