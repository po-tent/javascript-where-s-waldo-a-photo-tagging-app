import React, { useState } from "react";
import Game from "./Game";
import Menu from "./Menu";

function Display(props) {
  const [inGame, setInGame] = useState(false);
  const [drawing, setDrawing] = useState("");

  function toggleGame(game) {
    setInGame((prev) => !prev);
    setDrawing((prev) => (prev === "" ? game : ""));
  }

  return (
    <div className="display">
      {inGame ? (
        <Game drawing={drawing} toggleGame={toggleGame} />
      ) : (
        <Menu toggleGame={toggleGame} />
      )}
    </div>
  );
}

export default Display;
