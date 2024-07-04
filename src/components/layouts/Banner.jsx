import React from "react";
import banner from "../../assets/images/Background.png";
import Image from "../Image";
import { FaStar } from "react-icons/fa";
import { PiClockFill } from "react-icons/pi";
import Vector from "../../assets/icons/Vector.svg";
import { CiPlay1 } from "react-icons/ci";
import { RiPlayListAddFill } from "react-icons/ri";
import Button from "../Button";
import Navbar from "./Navbar";
function Banner() {
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
      icon: <Image src={Vector} />,
      text: "4k Quality",
    },
  ];
  return (
    <section className="relative">
      <div className="w-full relative">
        <Image src={banner} className="w-full h-auto" />
        <div className="absolute top-1/2 -translate-y-1/2  right-[30px] lg:right-[50px] xl:right-[200px]">
          {/* banner content */}
          <div className="">
            <h1 className="text-white font-bigShoulder font-black inline-block text-[48px] md:text-[100px] md:leading-[100px] xl:text-[150px] xl:leading-[155px] text-start uppercase">
              The lord <br /> of the rings{" "}
            </h1>
            <div className="my-4 flex gap-x-4">
              {featureBtn.map((item, index) => (
                <div
                  key={index}
                  className="rounded-full p-4 bg-white/20 text-white flex gap-x-2 font-jost items-center font-medium text-[18px] border"
                >
                  {item.icon} {item.text}
                </div>
              ))}
            </div>
            <p className="font-jost text-[22px] font-normal leading-[34px] text-para">
              The Lord of the Rings is a trilogy of epic fantasy adventure films
              directed.
            </p>
            {/* btn */}
            <div className="mt-8 flex gap-x-4">
              <Button
                text={`play trailer`}
                icon={<CiPlay1 size={24} className="text-white" />}
                className={``}
              />
              <button className="font-bold font-bigShoulder text-[18px] py-[15px] px-[25px] 2xl:py-[29px] 2xl:px-[46px] rounded-full flex gap-x-2 items-center capitalize text-para border border-white/20 ">
                <RiPlayListAddFill size={24} /> add to list
              </button>
            </div>
          </div>
        </div>
      </div>
      <Navbar className={`absolute top-1/2 -translate-y-1/2 right-10`}/>
    </section>
  );
}

export default Banner;
