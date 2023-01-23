import * as React from "react";
import "./block.css";
import Vector from "./Vector.png";

const Block = () => {
  return (
    <div className="blockIntro bg-white"> 
        <div className="logo introLogo flex justify-center m-auto my-12">
            <img src={Vector} className="self-center" alt="vector"></img>
        </div>
        <p className="text-black font-bold text-3xl text-center leading-10 mb-6">Adviser</p>
        <p className="text-black font-normal text-base text-center intro-descrip leading-8 mx-auto mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
    </div>
  );
};

export default Block;
