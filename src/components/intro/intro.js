import * as React from "react";
import "./intro.css";
import { graphql } from "gatsby";
import Block from "./block/block";

const titleIntro = "High Quality Output, Awesome Service"

const blocks = graphql`query MyQuery {
  allContentfulIntroBlock(sort: {title: ASC}) {
    edges {
      node {
        title
        description {
          raw
        }
      }
    }
  }
}`
console.log(blocks);
const Intro = () => {
  return (
    <div className="container pt-40 pb-72" style={{zIndex: 1}}>
        <p className="font-black text-center leading-21 text-black text-6xl mx-auto" style={{maxWidth: '679px'}}>{titleIntro}</p>
        <div className="flex gap-x-7 content-center mt-16 blocks flex-wrap">
          
          <Block/>
          <Block/>
          <Block/>
        </div>
    </div>
  );
};

export default Intro;
