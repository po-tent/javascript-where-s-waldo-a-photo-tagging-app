import React from "react";
import waldo from "../assets/waldo.jpg";
import wenda from "../assets/wenda.jpg";
import wizard from "../assets/wizard.jpg";
import odlaw from "../assets/odlaw.jpg";

function Characters(props) {
  return (
    <div className="charactersCont">
      <img
        className={`character ${props.found.waldo ? "found" : ""}`}
        src={waldo}
        alt="waldo tile"
      />
      <img
        className={`character ${props.found.wenda ? "found" : ""}`}
        src={wenda}
        alt="wenda tile"
      />
      <img
        className={`character ${props.found.wizard ? "found" : ""}`}
        src={wizard}
        alt="wizard tile"
      />
      <img
        className={`character ${props.found.odlaw ? "found" : ""}`}
        src={odlaw}
        alt="odlaw tile"
      />
    </div>
  );
}

export default Characters;
