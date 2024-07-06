import React from "react";
import SubHeading from "../SubHeading";
import MovieTiles from "../MovieTiles";
import s1 from "../../assets/images/s1.png";
import s2 from "../../assets/images/s2.png";
import s3 from "../../assets/images/s3.png";
import s4 from "../../assets/images/s4.png";
import s5 from "../../assets/images/s5.png";
import s6 from "../../assets/images/s6.png";

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

function NewReleases() {
  // for slider
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  //   for slider data
  const movies = [
    {
      thumbnail: s1,
      title: "world war 2",
    },
    {
      thumbnail: s2,
      title: "Samelill sronle",
    },
    {
      thumbnail: s3,
      title: "the family monkey",
    },
    {
      thumbnail: s4,
      title: "Samelill sronle",
    },
    {
      thumbnail: s5,
      title: "The Moon",
    },
    {
      thumbnail: s6,
      title: "The Rocket",
    },
  ];

  return (
    <section className="mt-[506px] pb-[60px]">
      <SubHeading text={"newest releases"} />
      {/* slider */}
      <div className="pt-[48px] pb-[50px]">
      <Slider {...settings}>
        {movies.map((item, index) => (
          <MovieTiles
            key={index}
            resulation={`4k quality`}
            duration={`2h 30m`}
            genre={`Action, comedy`}
            rating={9.5}
            title={item.title}
            thumbnail={item.thumbnail}
          />
        ))}
      </Slider>
      </div>
    </section>
  );
}

export default NewReleases;
