import * as React from "react";
import "./mortgageCalc.css";
import Calculator from "./calculator/calculator";
import TextBlock from "./textBlock/textBlock";


const MortgageCalc = () => {
  return (
    <div className="bg-left-right flex">
        <div className="container grid grid-flow-col calcSection">
            <Calculator></Calculator>
            <TextBlock></TextBlock>
        </div>
    </div>
  );
};

export default MortgageCalc;
