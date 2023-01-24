import * as React from "react";
import "./bgImage.css"; 

const BgImage = (props) => {
  return (
    <div className="bgImage">
        <img src={props.vector2} className="vector vector2" alt="vector2"/>

        <img src={props.vector1} className="vector vector1" alt="vector1"/>
    </div>
  );
};

export default BgImage;
