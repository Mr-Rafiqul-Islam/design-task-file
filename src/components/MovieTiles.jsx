import React from "react";
import Image from "./Image";
import Time from "../assets/icons/Time.svg";
import quality from "../assets/icons/quality.svg";
import Video from "../assets/icons/Video.png";
import { FaStar } from "react-icons/fa";
import { RiHdLine } from "react-icons/ri";
import TilesBtns from "./TilesBtns";

function MovieTiles({ thumbnail, title, rating, duration, genre, resulation }) {
  return (
    <div className="relative group max-w-[307px] h-[360.4px] overflow-hidden hover:scale-110 transition-all duration-700">
      <Image src={thumbnail} className={`object-fill h-[360.4px]`} />
      {/* play btn */}
      <div className="absolute top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 duration-700 transition-all cursor-pointer">
        <Image src={Video} />
      </div>
      {/* description */}
      <div className="absolute transition-all duration-300 -bottom-[115px] left-[25px] group-hover:bottom-[25px]">
        <div className="flex flex-col items-start gap-y-[5px]">
          {/* title */}
          <h3 className="font-bigShoulder font-bold text-[35px] leading-[40px] text-white uppercase">
            {title}
          </h3>
          {/* details */}
          <div className="flex justify-start items-center gap-x-[15px]">
            <p className="text-para flex gap-x-[5px] items-center font-jost font-normal text-base">
              <FaStar className="text-[#D27304]" /> {rating}
            </p>
            <p className="text-para flex gap-x-[5px] items-center font-jost font-normal text-base">
              <Image src={Time} /> {duration}
            </p>
            <p className="text-para flex gap-x-[5px] items-center font-jost font-normal text-base capitalize">
              {resulation.toLowerCase() === "4k quality" ? (
                <Image src={quality} className="-mb-[9px]" />
              ) : (
                <RiHdLine className="text-white" size={20} />
              )}{" "}
              {resulation}
            </p>
          </div>
          <p className="text-para font-jost font-normal text-sm">{genre}</p>
        </div>
      </div>
      {/* tilesbtn */}
      <TilesBtns />
    </div>
  );
}

export default MovieTiles;
