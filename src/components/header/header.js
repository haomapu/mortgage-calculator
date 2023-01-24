import * as React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="wrapper">
      <div className="container header flex justify-between py-10">
        <div className="flex space-x-5">
          <div className="logo flex justify-center">
            <p className="font-extrabold text-2xl self-center">K</p>
          </div>

          <p className="font-bold text-xl self-center">
            Kinka <br></br> Finance
          </p>
        </div>

        <div className="flex space-x-16 self-center">
          <p className="text-lg font-normal">Calculator</p>
          <p className="text-lg font-normal">Services</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
