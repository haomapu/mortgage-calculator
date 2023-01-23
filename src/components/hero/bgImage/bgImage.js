import * as React from "react";
import "./bgImage.css";
import Vector4 from "./Vector4.png" 
import Vector5 from "./Vector5.png" 

const BgImage = (props) => {
  return (
    <div className="bgImage">
                <img src={Vector5} className="vector vector2" alt="vector2"/>

        <img src={Vector4} className="vector vector1" alt="vector1"/>
    </div>
  );
};

export default BgImage;
