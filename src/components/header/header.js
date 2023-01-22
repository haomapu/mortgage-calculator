import * as React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="wrapper">
      <div className="container header flex justify-between p-10">
        <div className="flex space-x-5">
          <div className="logo flex justify-center">
            <p className="text-white font-extrabold text-2xl self-center">K</p>
            {/* Chỗ này chưa đúng size*/}
          </div>

          <p className="text-white font-bold text-xl self-center">
            Kinka <br></br> Finance
          </p>
        </div>

        <div className="flex space-x-16 self-center">
          <p className="text-white text-lg font-normal">Calculator</p>
          <p className="text-white text-lg font-normal">Services</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
