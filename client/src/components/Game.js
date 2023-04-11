import React from "react";
import { useEffect, useState, useRef } from "react";

import Characters from "./Characters";
import Drawing from "./Drawing";
import Clock from "./Clock";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Game(props) {
  const charactersArr = useRef([]);
  const [found, setFound] = useState({});
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    window
      .fetch(`/api/v1/images/${props.drawing.id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        charactersArr.current = json.characters;
      })
      .catch((error) => console.log(error));
  }, [props.drawing.id]);

  function checkCharacter({ imgX, imgY }) {
    let characterFound = false;
    charactersArr.current.forEach((c) => {
      if (
        isWithin30({ x: imgX, y: imgY, x2: c.x_location, y2: c.y_location })
      ) {
        characterFound = c;
      }
    });
    return characterFound;
  }

  function addToFound(c) {
    setFound((prev) => ({
      ...prev,
      [c.name]: c,
    }));
  }

  function isWithin30({ x, x2, y, y2 }) {
    if (x - x2 < 30 && x - x2 > -30) {
      if (y - y2 < 30 && y - y2 > -30) {
        return true;
      }
    }
  }

  function handleClick() {
    props.toggleGame("");
  }

  function over() {
    console.log("hello, I'm over");
    setGameOver(true);
  }

  console.log(Object.keys(found).length);
  console.log(!gameOver);
  if (Object.keys(found).length === 4 && !gameOver) {
    over();
  }

  return (
    <div className="gameCont">
      <button onClick={handleClick} className="home">
        <FontAwesomeIcon icon={faHome} />
      </button>
      <div className="game">
        <div className="sidePanel">
          <Clock
            gameOver={gameOver}
            drawingId={props.drawing.id}
            toggleGame={props.toggleGame}
          />
          <Characters found={found} />
        </div>
        <Drawing
          handleClick={checkCharacter}
          addToFound={addToFound}
          drawing={props.drawing.url}
        />
      </div>
    </div>
  );
}

export default Game;
