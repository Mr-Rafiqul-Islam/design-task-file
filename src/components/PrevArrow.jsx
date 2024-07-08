import React from "react";
import leftarrow from "../assets/icons/leftarrow.svg";
import Image from "./Image";

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute -top-[80px] right-[115px] 2xl:right-[167px] 2xl:-top-[100px] cursor-pointer"
    >
      <div className="w-[54.43px] h-[54.5px] rounded-full border hover:arrow-gradient transition-all duration-500 grid place-content-center">
        <Image src={leftarrow} />
      </div>
    </div>
  );
}

export default PrevArrow;
