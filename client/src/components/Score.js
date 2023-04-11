import React, { useState } from "react";
import uniqid from "uniqid";
import TimeFormat from "hh-mm-ss";

function Score(props) {
  const [name, setName] = useState("");
  const [scores, setScores] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setName(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    // const csrfToken = document.querySelector("[name='csrf-token']");

    const formData = {
      [e.target.elements[0].name]: e.target.elements[0].value,
      [e.target.elements[1].name]: e.target.elements[1].value,
      [e.target.elements[2].name]: e.target.elements[2].value,
    };

    console.log(formData);
    console.log(JSON.stringify(formData));
    fetch(`api/v1/images/${e.target.elements[2].value}/scores`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((data) => data.json())
      .then((json) => {
        setScores(makeTable(json));
        setSubmitted(true);
      })
      .catch((err) => console.log("Error boi is: ", err));

    // get map scores after you added in your score
  }

  function makeTableRows(arr) {
    return arr.map((scores) => (
      <tr key={uniqid()}>
        <td>{scores.name}</td>
        <td>{TimeFormat.fromS(scores.seconds)}</td>
      </tr>
    ));
  }

  function makeTable(arr) {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>{makeTableRows(arr)}</tbody>
      </table>
    );
  }

  function handleClick() {
    props.toggleGame("");
  }

  return (
    <div className="scoreCont">
      <div className="scoreCard">
        <h2>You did it!</h2>

        <div className="tableCont">{scores}</div>

        {submitted ? null : (
          <form onSubmit={onSubmit}>
            <p>Please enter your Name</p>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={handleChange}
                name="name"
              />
            </label>
            <input value={parseInt(props.time)} type="hidden" name="seconds" />
            <input value={props.drawingId} type="hidden" name="image_id" />
            <input type="submit" value="Submit" />
          </form>
        )}
        <button onClick={handleClick}>Home</button>
      </div>
    </div>
  );
}

export default Score;
