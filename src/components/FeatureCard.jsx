import React from "react";
import Image from "./Image";
import Time from "../assets/icons/Time.svg";
import quality from "../assets/icons/quality.svg";
import { FaStar } from "react-icons/fa";
import { RiHdLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function FeatureCard({
  thumbnail,
  title,
  rating,
  resulation,
  genre,
  duration,
  path,
}) {
  return (
    <div className="pb-2 max-w-[150px] 2xl:max-w-[364px]">
      {/* card img */}
      <Link to={path} className="mb-5">
        <Image src={thumbnail} className={"2xl:max-w-[364px] w-full"}/>
      </Link>
      {/* card content */}
      <div className="flex flex-col items-center gap-y-[6px] 2xl:gap-y-[15px]">
        {/* title */}
        <h3 className="font-bigShoulder font-bold text-base 2xl:text-[35px] 2xl:leading-[40px] text-white uppercase mt-[10px] 2xl:mt-[22px]">
          {title}
        </h3>
        {/* details */}
        <div className="flex justify-center items-center gap-x-2 2xl:gap-x-4">
          <p className="text-para flex gap-x-[2px] 2xl:gap-x-[5px] items-center font-jost font-normal text-[10px] 2xl:text-base">
            <FaStar className="text-[#D27304]" /> {rating}
          </p>
          <p className="text-para flex gap-x-[2px] 2xl:gap-x-[5px] items-center font-jost font-normal text-[10px] 2xl:text-base">
            <Image src={Time} className={"w-[10px] 2xl:w-[14px]"}/> {duration}
          </p>
          <p className="text-para flex gap-x-[2px] 2xl:gap-x-[5px] items-center font-jost font-normal  text-[10px] 2xl:text-base capitalize">
            {resulation.toLowerCase() === "4k quality" ? (
              <Image src={quality} className="2xl:-mb-[9px] -mb-[3px] w-[15px]" />
            ) : (
              <RiHdLine className="text-white" size={20} />
            )}{" "}
            {resulation}
          </p>
        </div>
        <p className="text-para font-jost font-normal  text-[10px] 2xl:text-sm">{genre}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
