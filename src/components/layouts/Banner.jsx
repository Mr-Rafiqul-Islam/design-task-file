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
      <div className="absolute max-420:top-[38px] min-420:top-[50px] right-0 min-420:right-[25px] min-576:right-[40px] min-576:top-[100px] sm:!top-[90px] sm:!right-[100px] md:!top-[140px] md:!right-[90px] lg:!top-[180px] lg:!right-[100px] xl:!top-[150px] xl:!right-[200px] 2xl:!right-[180px] min-1800:!right-[315px] 2xl:!top-[240px] min-1800:!top-[248px] w-[240px] md:w-[340px] lg:w-[450px] 2xl:w-[700px] min-1800:w-[741px]">
        {/* banner content */}
        <h1 className="text-white font-bigShoulder font-black inline-block text-[22px] sm:text-[48px] lg:text-[60px] xl:text-[80px] 2xl:text-[100px] min-1800:text-[150px] leading-[22px] sm:leading-[48px] md:leading-[60px] xl:leading-[100px] 2xl:leading:[120px] min-1800:leading-[155px] text-start uppercase">
          The lord <br /> of the rings{" "}
        </h1>
        {/* feature btn */}
        <div className="my-2 md:my-3 2xl:my-10 flex gap-x-1 md:gap-x-[15px]">
          {featureBtn.map((item, index) => (
            <div
              key={index}
              className="rounded-full p-1 lg:p-2 xl:p-4 bg-white/20 text-white flex gap-x-[2px] lg:gap-x-1.5 xl:gap-x-[10px] font-jost items-center font-medium text-[10px] lg:text-sm 2xl:text-[18px] border"
            >
              {item.icon} {item.text}
            </div>
          ))}
        </div>
        <p className="font-jost text-[12px] leading-3 sm:leading-4 xl:text-[22px] font-normal xl:leading-[34px] text-para">
          The Lord of the Rings is a trilogy of epic fantasy adventure films
          directed.
        </p>
        {/* btn */}
        <div className="mt-2 md:mt-3 xl:mt-9 2xl:mt-12 flex gap-x-2 md:gap-x-4">
          <Button
            text={`play trailer`}
            icon={
              <CiPlay1 className="text-white text-[10px] 2xl:text-[18px]" />
            }
          />
          <button className="font-bold font-bigShoulder text-[12px] py-[5px] px-[10px] sm:py-[10px] sm:px-[20px] md:text-sm md:py-[15px] md:px-[30px] 2xl:py-[29px] 2xl:px-[46px] rounded-full flex gap-x-[2px] md:gap-x-2 items-center capitalize text-para border border-white/20 2xl:text-[18px]">
            <RiPlayListAddFill className="text-[#E2E2E2] text-[10px] md:text-[17px]" />{" "}
            add to list
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
