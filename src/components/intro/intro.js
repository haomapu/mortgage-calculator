import * as React from "react";
import "./intro.css";
import { useStaticQuery,graphql } from "gatsby";
import Block from "./block/block";

const titleIntro = "High Quality Output, Awesome Service";

const Intro = ({ allContentfulIntroBlock }) => {
  const data = useStaticQuery(graphql`
  query BlockQuery {
    allContentfulIntroBlock(sort: {title: ASC}) {
      edges {
        node {
          description {
            description
          }
          title
          logo {
            url
          }
        }
      }
    }
  }
`);

if (data) return null

  return (
    <div className="container pt-40 pb-72" style={{ zIndex: 1 }}>
      <p
        className="font-black text-center leading-21 text-black text-6xl mx-auto"
        style={{ maxWidth: "679px" }}
      >
        {titleIntro}
      </p>
      <div className="flex gap-x-7 content-center mt-16 blocks flex-wrap">
        {data.allContentfulIntroBlock.edges.map((node, index)=> {
            return <Block block={node} key={index}/>
          })}
      </div>
    </div>
  );
};

export default Intro;