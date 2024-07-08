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
import banner from "../assets/images/Background.png";
function Home() {
  // for banner content
  const bannerContent = [
    {
      bannerImg: banner,
    },
    {
      bannerImg: banner,
    },
    {
      bannerImg: banner,
    },
    {
      bannerImg: banner,
    },
    {
      bannerImg: banner,
    },
  ];
  // for slider
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const [totalSlides, setTotalSlides] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // for getting total slidesNumber
  useEffect(() => {
    if (sliderRef.current) {
      setTotalSlides(sliderRef.current.innerSlider.props.children.length);
    }
  }, []);
  // for responsive
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // for slider settings
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
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
          top:
            windowWidth < 640
              ? "60px"
              : windowWidth < 768
              ? "110px"
              : windowWidth < 1280
              ? "130px"
              : windowWidth < 1800
              ? "255px"
              : "394px",
          left:
            windowWidth < 640 ? "10px" : windowWidth < 1800 ? "15px" : "55px",
          transform: "translateY(-50%)",
          display: windowWidth < 420 ? "none" : "inline-block",
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
          width:
            activeSlide === i
              ? windowWidth < 768
                ? "14px"
                : "25px"
              : windowWidth < 768
              ? "10px"
              : "14px",
          height: "4px",
          backgroundColor:
            activeSlide === i ? "white" : "rgba(255, 255, 255, 0.2)",
          borderRadius: "5px",
          fontSize: "0px",
          transition: "width 0.3s, background-color 0.3s",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  return (
    <main>
      <section className="relative">
        <Slider ref={sliderRef} {...settings}>
          {bannerContent.map((item, index) => (
            <Banner key={index} bannerImg={item.bannerImg} />
          ))}
        </Slider>
        <Navbar />
        {/* scroldown icon */}
        <Scrolldown />
        {/* fraction page number] */}
        <SlideNumber activeSlide={activeSlide} totalSlides={totalSlides} />
      </section>
      <Feature />
      <NewReleases />
    </main>
  );
}

export default Home;
