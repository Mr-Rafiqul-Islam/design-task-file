import React from "react";
import downarrow from "../assets/icons/downarrow.svg";
import Image from "./Image";
function Scrolldown() {
  return (
    <div className="absolute lg:bottom-[35px] 2xl:bottom-[85px] min-1800:left-[35px] hidden lg:flex flex-col items-center ">
      <p className="rotate-90 font-jost text-base font-normal text-white mb-[50px]">
        Scroll down
      </p>
      <div className="animate-bounce transition-all duration-300 -ms-1">
        <Image src={downarrow}  />
      </div>
    </div>
  );
}

export default Scrolldown;
