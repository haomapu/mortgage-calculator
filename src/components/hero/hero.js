import * as React from "react";
import "./hero.css";
import Description from "./description/description";
import Title from "./title/title";
import BtnLink from "./btnLink/btnLink";
import BgImage from "./bgImage/bgImage";
import { graphql, useStaticQuery } from "gatsby";

const Hero = () => {
  const data = useStaticQuery(graphql`
  query HeroQuery{
    allContentfulHeroComponents {
      edges {
        node {
          title
          vector1 {
            url
          }
          vector2 {
            url
          }
          button {
            name
            url
          }
          description {
            description
          }
        }
      }
    }
  }
  `)
  console.log(data);
  const heroComponents =  data.allContentfulHeroComponents.edges[0].node;
  return (
    <div className="hero">
        <div className="container mt-32 pb-60 pt-32 ">
            <Title title={heroComponents.title}/>
            <Description description={heroComponents.description.description}/>
            <BtnLink button={heroComponents.button}/>
        </div>
        <BgImage vector1={heroComponents.vector1.url} vector2={heroComponents.vector2.url}></BgImage>

    </div>
    );
};

export default Hero;
