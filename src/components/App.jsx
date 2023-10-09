import { API } from "../congif/config";
import "../style/App.css";
import React, { useState } from "react";

export default function App() {
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState([]);

  function handleInput(e) {
    setLocation(e.target.value);
  }

  function handleOnBlur() {
    if (location.charAt(0) !== location.charAt(0).toUpperCase()) {
      console.log("Veuillez mettre la première lettre en majuscule");
    }
  }

  return (
    <div>
      <h1>What is the weather ?</h1>
      <input
        type="text"
        value={location}
        onChange={handleInput}
        onBlur={handleOnBlur}
      ></input>
      {location !== "" ? <h2>{location}</h2> : null}
      <button onClick={async () => await API(location)}>Check</button>
    </div>
  );
}
