import React from "react";
import rightarrow from "../assets/icons/rightarrow.svg";
import Image from "./Image";

function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute right-[98px] -top-[100px] cursor-pointer"
    >
      <div className="w-[54.43px] h-[54.5px] rounded-full border hover:arrow-gradient grid place-content-center transition-all duration-500">
        <Image src={rightarrow} />
      </div>
    </div>
  );
}

export default NextArrow;
