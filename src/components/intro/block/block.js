import * as React from "react";
import "./block.css";

const Block = (props) => {
  return (
    <div className="blockIntro bg-white">
      <div className="logo introLogo flex justify-center m-auto my-12 ">
        <img src={props.block.node.logo.url} width={44} height={44} className="self-center" alt="vector"></img>
      </div>
      <p className="text-black font-bold text-3xl text-center leading-10 mb-6">
        {props.block.node.title}
      </p>
      <p className="text-black font-normal text-lg text-center intro-descrip leading-8 mx-11 mb-28">
        {props.block.node.description.description}

      </p>
    </div>
  );
};

export default Block;
