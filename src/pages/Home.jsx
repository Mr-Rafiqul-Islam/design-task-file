import React from "react";
import Banner from "../components/layouts/Banner";
import Navbar from "../components/layouts/Navbar";
import Feature from "../components/layouts/Feature";
import NewReleases from "../components/layouts/NewReleases";
// for slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid"
        }}
      >
        {i + 1}
      </div>
    )
  };
  return (
    <main>
      <div className="relative">
        <Slider {...settings}>
        <Banner />
        <Banner />
        <Banner />
        </Slider>
        <Navbar />
      </div>
      <Feature />
      <NewReleases />
    </main>
  );
}

export default Home;
