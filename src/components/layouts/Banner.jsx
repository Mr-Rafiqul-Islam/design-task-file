import React from "react";
import Container from "../Container";

function Banner() {
  return (
    <section className="pt-[200px] pb-[230px] md:pt-[230px] md:pb-[270px] bg-banner bg-cover bg-center bg-no-repeat">
      <Container>
        {/* banner content */}
        <div className="flex w-[90%] justify-end">
          <div>
            <h1 className="text-white font-bigShoulder font-black inline-block text-[48px] md:text-[150px] md:leading-[155px] text-start uppercase">
              The lord <br /> of the rings{" "}
            </h1>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Banner;
