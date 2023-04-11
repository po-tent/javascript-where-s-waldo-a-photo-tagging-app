import React from "react";

function Drawing(props) {
  function getCoords(e) {
    var ratioX = e.target.naturalWidth / e.target.offsetWidth;
    var ratioY = e.target.naturalHeight / e.target.offsetHeight;

    var domX = e.clientX + window.pageXOffset - e.target.parentNode.offsetLeft;
    var domY = e.clientY + window.pageYOffset - e.target.parentNode.offsetTop;

    var imgX = Math.round(domX * ratioX);
    var imgY = Math.round(domY * ratioY);

    let width = (domX / e.target.parentNode.offsetWidth) * 100;
    let height = (domY / e.target.parentNode.offsetHeight) * 100;

    let characterFound = props.handleClick({ imgX, imgY });
    if (characterFound) {
      props.addToFound(characterFound);

      let parent = e.target.parentNode;
      let circle = document.createElement("div");
      circle.className = "circleFound";
      circle.style.top = `calc(${height}% - 15px)`;
      circle.style.left = `calc(${width}% - 15px)`;

      parent.appendChild(circle);
    }
  }

  return (
    <div>
      <div className="drawingCont">
        <img
          src={`/images/${props.drawing}.jpeg`}
          alt={`${props.drawing} Waldo puzzle`}
          onClick={getCoords}
        ></img>
      </div>
    </div>
  );
}

export default Drawing;
