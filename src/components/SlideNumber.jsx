import React from "react";

function SlideNumber({ activeSlide, totalSlides }) {
  return (
    <div className="absolute top-[593px] left-[55px] font-bigShoulder text-white font-bold text-[60px] flex">
      0{activeSlide + 1}{" "}
      <p className="text-[30px] text-white/20 mt-[25px] flex items-center tracking-tight">
        &#8725; 0{totalSlides}
      </p>
    </div>
  );
}

export default SlideNumber;
