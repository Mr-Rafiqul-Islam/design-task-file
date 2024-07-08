import React from "react";
import FeatureCard from "../FeatureCard";
import movie1 from "../../assets/images/movie1.png";
import movie2 from "../../assets/images/movie2.png";
import movie3 from "../../assets/images/movie3.png";
import movie4 from "../../assets/images/movie4.png";
import { Link } from "react-router-dom";

function Feature({ classname }) {
  // for feature card
  const featureItem = [
    {
      id: 1,
      title: "Samelill sronle",
      thumbnail: movie1,
      rating: 9.5,
      resulation: "4k Quality",
      genre: "Action, Comedy",
      duration: "2h 30m",
    },
    {
      id: 2,
      title: "The family monky",
      thumbnail: movie2,
      rating: 9.5,
      resulation: "4k Quality",
      genre: "Action, Comedy",
      duration: "2h 30m",
    },
    {
      id: 3,
      title: "Chiefly universes",
      thumbnail: movie3,
      rating: 9.5,
      resulation: "4k Quality",
      genre: "Comedy, Crime",
      duration: "2h 30m",
    },
    {
      id: 4,
      title: "World war 02",
      thumbnail: movie4,
      rating: 9.5,
      resulation: "4k Quality",
      genre: "Action, Crime",
      duration: "2h 30m",
    },
  ];
  return (
    <div
      className={`xl:absolute z-10 xl:left-1/2 xl:-translate-x-1/2 xl:-mt-10 2xl:-mt-14 lg:w-[1024px] 2xl:w-full lg:mx-auto min-1800:w-[1800px]`}
    >
      <div className="w-full 2xl:h-[454px] bg-gradient-to-r from-[#181818] to-[#151515] rounded-[50px] py-5 2xl:py-0">
        <div className="flex flex-wrap 2xl:flex-nowrap justify-center gap-x-[30px] 2xl:absolute 2xl:z-10 2xl:left-1/2 2xl:-translate-x-1/2 xl:-mt-[60px] 2xl:-mt-[68px] min-1800:-mt-[92px] 2xl:w-full">
          {featureItem.map((item) => (
            <FeatureCard
              key={item.id}
              duration={item.duration}
              resulation={item.resulation}
              genre={item.genre}
              title={item.title}
              thumbnail={item.thumbnail}
              rating={item.rating}
              path={"/"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feature;
