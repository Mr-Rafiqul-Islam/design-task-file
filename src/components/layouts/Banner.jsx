import React from "react";
import Image from "../Image";
import { FaStar } from "react-icons/fa";
import { PiClockFill } from "react-icons/pi";
import Vector from "../../assets/icons/Vector.svg";
import { CiPlay1 } from "react-icons/ci";
import { RiPlayListAddFill } from "react-icons/ri";
import Button from "../Button";
function Banner({ bannerImg }) {
  const featureBtn = [
    {
      icon: <FaStar />,
      text: "4.9 Reviews",
    },
    {
      icon: <PiClockFill />,
      text: "02h 30m",
    },
    {
      icon: <Image src={Vector} className={`w-[10px] xl:w-auto`} />,
      text: "4k Quality",
    },
  ];
  return (
    <section className="w-full relative">
      {/* banner img */}
      <Image src={bannerImg} className="w-full h-full" />
      <div className="absolute max-420:top-[35px] min-420:top-[50px] right-0 min-420:right-[25px] min-576:right-[40px] min-576:top-[100px] sm:!top-[90px] sm:!right-[70px] md:!top-[150px] md:!right-[90px] lg:right-[50px] xl:right-[315px] xl:top-[248px]  w-[240px] md:w-[340px] lg:w-[741px]">
        {/* banner content */}
        <h1 className="text-white font-bigShoulder font-black inline-block text-[20px] sm:text-[48px] lg:text-[100px] xl:text-[150px] md:leading-[60px] xl:leading-[155px] text-start uppercase">
          The lord <br /> of the rings{" "}
        </h1>
        {/* feature btn */}
        <div className="my-2 md:my-3 xl:my-10 flex gap-x-1 md:gap-x-[15px]">
          {featureBtn.map((item, index) => (
            <div
              key={index}
              className="rounded-full p-1 xl:p-4 bg-white/20 text-white flex gap-x-[2px] xl:gap-x-[10px] font-jost items-center font-medium text-[10px] xl:text-[18px] border"
            >
              {item.icon} {item.text}
            </div>
          ))}
        </div>
        <p className="font-jost text-[12px] leading-3 xl:text-[22px] font-normal xl:leading-[34px] text-para">
          The Lord of the Rings is a trilogy of epic fantasy adventure films
          directed.
        </p>
        {/* btn */}
        <div className="mt-2 md:mt-3 xl:mt-12 flex gap-x-2 md:gap-x-4">
          <Button
            text={`play trailer`}
            icon={<CiPlay1 className="text-white text-[10px]" />}
            className={`text-[12px] py-[5px] px-[10px] gap-x-[2px] md:gap-x-2`}
          />
          <button className="font-bold font-bigShoulder text-[12px] py-[5px] px-[10px] 2xl:py-[29px] 2xl:px-[46px] rounded-full flex gap-x-[2px] md:gap-x-2 items-center capitalize text-para border border-white/20 ">
            <RiPlayListAddFill className="text-[#E2E2E2] text-[10px] md:text-[17px]" />{" "}
            add to list
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
