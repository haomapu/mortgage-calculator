import * as React from "react";
import "./hero.css";
import Description from "./description/description";
import Title from "./title/title";
import BtnLink from "./btnLink/btnLink";
import BgImage from "./bgImage/bgImage";

const title = "Financial Advisor For Next Level Happy Life!";
const description = "Are you looking for amazing financial services? Don't worry! We got it for you!";

const Hero = () => {
  return (
    <div className="hero">
        <div className="container mt-32 pb-60 pt-32 ">
            <Title title={title}/>
            <Description description={description}/>
            <BtnLink />
        </div>
        <BgImage></BgImage>

    </div>
  );
};

export default Hero;
