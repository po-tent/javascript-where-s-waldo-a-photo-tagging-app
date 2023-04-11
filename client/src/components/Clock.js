import React, { useEffect, useState } from "react";
import TimeFormat from "hh-mm-ss";
import Score from "./Score";

function Clock(props) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (!props.gameOver) {
        setTime((time) => time + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      {props.gameOver ? (
        <Score
          time={time}
          drawingId={props.drawingId}
          toggleGame={props.toggleGame}
        />
      ) : (
        ""
      )}
      <div className="clock">
        <h4>{TimeFormat.fromS(time)}</h4>
      </div>
    </div>
  );
}

export default Clock;
