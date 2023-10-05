import { API } from "../congif/config";
import "../style/App.css";
import React, { useState } from "react";

export default function App() {
  const [location, setLocation] = useState("");
  const [result, setResult] = useState([]);

  function handleInput(e) {
    setLocation(e.target.value);
  }

  async function handleOnBlur() {
    if (location.charAt(0) !== location.charAt(0).toUpperCase()) {
      console.log("Veuillez mettre la première lettre en majuscule");
    } else {
      try {
        const response = await API(location);
        console.log(response);
        setResult(response);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div>
      <h1>Test</h1>
      <input
        type="text"
        value={location}
        onChange={handleInput}
        onBlur={handleOnBlur}
      ></input>
      {location !== "" ? <h2>{location}</h2> : null}
      {result.length !== 0 ? <p>{JSON.stringify(result)}</p> : null}
    </div>
  );
}
