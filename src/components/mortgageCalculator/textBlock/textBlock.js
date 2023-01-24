import * as React from "react";
import "./textBlock.css";
import BtnLink from "../../hero/btnLink/btnLink";

const TextBlock = () => {
  return (
    <div className="py-20 pl-12">
      <p className="textBlock-title font-black text-6xl self-center text-black mr-0">
        Try our awesome Calculator
      </p>
      <p className="textBlock-description font-normal self-center text-black mt-7 mr-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
      <button className="btn btn-orange font-black text-lg px-10 py-4 mt-12">
        Register
      </button>
    </div>
  );
};

export default TextBlock;
