import * as React from "react";
import "./title.css";

const Title = (props) => {
  return (
    <div className="title font-black">
        {props.title}
    </div>
  );
};

export default Title;
