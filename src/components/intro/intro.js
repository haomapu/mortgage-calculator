import * as React from "react";
import "./intro.css";
import Block from "./block/block";

const titleIntro = "High Quality Output, Awesome Service"

const Intro = () => {
  return (
    <div className="container pt-40 pb-72">
        <p className="font-black text-center leading-21 text-black text-6xl mx-auto" style={{maxWidth: '679px'}}>{titleIntro}</p>
        <div className="flex space-x-7 justify-center mt-16">
          <Block/>
          <Block/>
          <Block/>
        </div>
    </div>
  );
};

export default Intro;
