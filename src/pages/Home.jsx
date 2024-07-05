import React from "react";
import Banner from "../components/layouts/Banner";
import Navbar from "../components/layouts/Navbar";
import Feature from "../components/layouts/Feature";
import NewReleases from "../components/layouts/NewReleases";

function Home() {
  return (
    <main>
      <div className="relative">
        <Banner />
        <Navbar className={`absolute top-1/2 -translate-y-1/2 right-10`} />
      </div>
      <Feature />
      <NewReleases />
    </main>
  );
}

export default Home;
