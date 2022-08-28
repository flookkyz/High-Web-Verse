import React from "react";
import About from "../Components/About";
import Team from "../Components/Team";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Zone from "../Components/Zone";
import Showcase from "../Components/Showcase";
import Promote from "../Components/Promote";
import Sideshow from "../Components/Sideshow";

function Home() {
  return (
    <>
      <div className="flex flex-col absolute top-0">
      <Sideshow />
        <Promote />
        <Showcase />
        <Zone />
        <About />
        <Team />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Home;

{
  /* <div className="flex flex-col absolute top-0">
        <Video />
        <Service />
        <Service2 />
      </div> */
}
