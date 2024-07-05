import React from "react";
import Image from "./Image";
import Time from "../assets/icons/Time.svg";
import quality from "../assets/icons/quality.svg";
import { FaStar } from "react-icons/fa";
import { RiHdLine } from "react-icons/ri";

function FeatureCard({
  thumbnail,
  title,
  rating,
  resulation,
  genre,
  duration,
}) {
  return (
    <div className="pb-2">
      {/* card img */}
      <div className="mb-5">
        <Image src={thumbnail} />
      </div>
      {/* card content */}
      <div className="flex flex-col items-center gap-y-[15px]">
        {/* title */}
        <h3 className="font-bigShoulder font-bold text-[35px] leading-[40px] text-white uppercase">
          {title}
        </h3>
        {/* details */}
        <div className="flex justify-center items-center gap-x-[15px]">
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
  );
}

export default FeatureCard;
