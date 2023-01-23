import * as React from "react";
import "./description.css";

const Description = (props) => {
  return (
    <div className="description font-normal text-lg mr-0 mt-6">
        {props.description}
    </div>
  );
};

export default Description;
