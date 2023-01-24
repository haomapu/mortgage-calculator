import * as React from "react"

import Header from "../components/header/header.js"
import Hero from "../components/hero/hero.js";
import Intro from "../components/intro/intro.js";
import MortgageCalc from "../components/mortgageCalculator/mortgageCalc.js";
import Footer from "../components/footer/footer.js";

import "../styles/global.css"
import "./index.css";

const IndexPage = () => {
  return (
    <div className="mx-auto">
      <div className="bg-dark-blue">
        <Header/>
        <Hero />
      </div>
      <Intro></Intro>
      <MortgageCalc></MortgageCalc>

      <Footer></Footer>
    </div>
  )
}

export default IndexPage;
