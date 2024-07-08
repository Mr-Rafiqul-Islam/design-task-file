import React from "react";

function SlideNumber({ activeSlide, totalSlides }) {
  return (
    <div className="absolute left-[15px] md:bottom-[150px] bottom-[25px] lg:bottom-[270px] 2xl:bottom-[350px] min-1800:bottom-[424px] min-1800:left-[55px] font-bigShoulder text-white font-bold text-xl md:text-[60px] flex">
      0{activeSlide + 1}{" "}
      <sub className="text-sm md:text-[30px] xl:mt-[5px] text-white/20 flex items-center tracking-tight">
        &#8725; 0{totalSlides}
      </sub>
    </div>
  );
}

export default SlideNumber;
