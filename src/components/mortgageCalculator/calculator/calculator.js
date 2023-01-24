import * as React from "react";
import "./calculator.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const handleStyle = {
  borderColor: "#FF8049",
  height: "19px",
  width: "19px",
  marginTop: "-2.5px",
  backgroundColor: "#FFFFFF",
  opacity: 100,
  borderWidth: 3.5,
};

const trackStyle = {
  backgroundColor: "rgba(255, 128, 73, 0.69)",
  height: "14px",
};

const railStyle = { backgroundColor: "white", height: "14px", borderColor: 'red'};
const Calculator = () => {
  const [purchasePrice, setPurchasePrice] = React.useState(100);
  const [downPayment, setDownPayment] = React.useState(100);
  const [repaymentTime, setRepaymentTime] = React.useState(1);
  const [interestRate, setInterestRate] = React.useState(1);
  const [loan, setLoan] = React.useState(1);
  const [repaymentPerMonth, setRepaymentPerMonth] = React.useState(0);

  React.useEffect(() => {
    setLoan(purchasePrice - downPayment);
  }, [purchasePrice, downPayment])
  React.useEffect(() => {
    const result =
      (loan *
        (interestRate *
          0.01 *
          Math.pow(1 + interestRate * 0.01, repaymentTime))) /
      (Math.pow(1 + interestRate * 0.01, repaymentTime) - 1);
    setRepaymentPerMonth(Number.parseFloat(result).toFixed(0));  }, [loan, repaymentTime, interestRate])

  return (
    <div className="py-16">
      <p className="titleCalc font-black text-5xl self-center">
        Mortgage Calculator
      </p>
      <p className="descripCalc text-lg self-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
      <div className="grid gap-5 py-8 sliders">
        <div>
          <p className="font-black">Purchase Price: ${purchasePrice}</p>
          <Slider
            style={{ width: "256px" }}
            min={100}
            max={1000000}
            step={100}
            value={purchasePrice}
            onChange={(event) => {
              setPurchasePrice(event)
            }}
            trackStyle={trackStyle}
            handleStyle={handleStyle}
            railStyle={railStyle}
          />
        </div>
        <div>
          <p className="font-black">Down Payment: ${downPayment}</p>
          <Slider
            style={{ width: "256px" }}
            min={100}
            max={300000}
            step={100}
            value={downPayment}
            onChange={(event) => {
              setDownPayment(event);
            }}
            trackStyle={trackStyle}
            handleStyle={handleStyle}
            railStyle={railStyle}
          />
        </div>
        <div>
          <p className="font-black">Repayment Time: {repaymentTime} years</p>
          <Slider
            style={{ width: "256px" }}
            min={1}
            max={50}
            step={1}
            value={repaymentTime}
            onChange={(event) => {
              setRepaymentTime(event);
            }}
            trackStyle={trackStyle}
            handleStyle={handleStyle}
            railStyle={railStyle}
          />
        </div>
        <div>
          <p className="font-black">Interest Rate: {interestRate}%</p>
          <Slider
            style={{ width: "256px" }}
            min={1}
            max={15}
            step={1}
            value={interestRate}
            onChange={(event) => {
              setInterestRate(event);
            }}
            trackStyle={trackStyle}
            handleStyle={handleStyle}
            railStyle={railStyle}
          />
        </div>
      </div>
      <p className="font-black">
        Loan amount:
        <span className="text-2xl text-orange-400 font-black">${loan}</span>
      </p>
      <p className="font-black">
        Estimated repayment per month:
        <span className="text-2xl text-orange-400 font-black">
          ${repaymentPerMonth}
        </span>
      </p>
    </div>
  );
};

export default Calculator;
