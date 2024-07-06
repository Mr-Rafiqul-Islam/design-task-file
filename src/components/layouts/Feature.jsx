import React from "react";
import Container from "../Container";
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
    <Container
      className={`absolute z-10 left-1/2 -translate-x-1/2 -mt-14 ${classname}`}
    >
      <div className="w-full h-[454px] bg-gradient-to-r from-[#181818] to-[#151515] rounded-[50px]">
        <div className="flex justify-center gap-x-[30px] absolute z-10 left-1/2 -translate-x-1/2 -mt-[92px] w-full">
          {featureItem.map((item) => (
            <FeatureCard
              key={item.id}
              duration={item.duration}
              resulation={item.resulation}
              genre={item.genre}
              title={item.title}
              thumbnail={item.thumbnail}
              rating={item.rating}
              path={'/'}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Feature;
