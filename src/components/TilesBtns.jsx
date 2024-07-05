import React from "react";
import { RiPlayList2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import airplay from "../assets/icons/airplay.svg";
import Upload from "../assets/icons/Upload.svg";
function TilesBtns() {
    // for btn items
  const btnlist = [
    <RiPlayList2Line size={18} className="text-white" />,
    <FaRegHeart size={18} className="text-white" />,
    <img src={airplay} className="w-[18px] h-[18px]" />,
    <img src={Upload} className="w-[18px] h-[18px]" />,
  ];
  return (
    <div className="absolute top-8 group-hover:right-[20px] -right-[50px] transition-all duration-700">
      <div className="flex flex-col gap-y-[6px]">
        {btnlist.map((item, index) => (
          <button
            key={index}
            className="w-[40px] h-[40.04px] rounded-full grid place-content-center bg-white/20 custom-transition hover:text-white"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TilesBtns;
