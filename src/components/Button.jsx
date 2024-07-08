import React from "react";
import cn from "../lib/cn";
function Button({ icon, text, className }) {
  return (
    <button
      className={cn(
        `text-[12px] py-[5px] px-[10px] gap-x-[2px] md:gap-x-2 bg-gradient-to-r from-[#5A0DFF] via-[#FF29B8] to-[#FF581C] text-white font-bold font-bigShoulder sm:py-[10px] sm:px-[20px] md:text-sm md:py-[15px] md:px-[30px] 2xl:text-[18px] 2xl:py-[29px] 2xl:px-[46px] rounded-full flex items-center uppercase`,
        className
      )}
    >
      {icon}
      {text}
    </button>
  );
}

export default Button;
