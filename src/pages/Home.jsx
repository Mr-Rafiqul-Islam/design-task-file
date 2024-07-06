import React, { useEffect, useRef, useState } from "react";
import Banner from "../components/layouts/Banner";
import Navbar from "../components/layouts/Navbar";
import Feature from "../components/layouts/Feature";
import NewReleases from "../components/layouts/NewReleases";
// for slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Scrolldown from "../components/Scrolldown";
import SlideNumber from "../components/SlideNumber";

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      setTotalSlides(sliderRef.current.innerSlider.props.children.length);
    }
  }, []);
  // for slider
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "394px",
          left: "55px",
          transform: "translateY(-50%)",
          display: "inline-block",
          width: "auto",
        }}
      >
        <ul

          style={{
            position: "absolute",
            top: "50%",
            display: "flex",
            flexDirection: "column",

          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "14px",
          height: "4px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "5px",
          fontSize: "0px",
        }}
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <main>
      <div className="relative" id="home">
        <Slider ref={sliderRef} {...settings}>
          <Banner />
          <Banner />
          <Banner />
          <Banner />
          <Banner />
        </Slider>
        <Navbar />
        {/* scroldown icon */}
        <Scrolldown/>
        {/* fraction page number] */}
        <SlideNumber activeSlide={activeSlide} totalSlides={totalSlides}/>
      </div>
      <Feature />
      <NewReleases />
    </main>
  );
}

export default Home;
