import * as React from "react";
import "./btnLink.css";

const BtnLink = (props) => {
  return (
    <button className="btnLink btn btn-orange font-black text-lg px-12 py-3 mt-9">
      <a href={props.button.url}>{props.button.name}</a>
    </button>
  );
};

export default BtnLink;
