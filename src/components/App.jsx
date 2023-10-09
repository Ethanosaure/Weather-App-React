import "../style/App.css";
import React, { useState } from "react";
import Card from "./Card";
import Header from "./Header";

export default function App() {
  const [location, setLocation] = useState("");
  const [allLocations, setAllLocations] = useState([]);

  return (
    <div>
      <Header
        location={location}
        setLocation={setLocation}
        setAllLocations={setAllLocations}
      />
      <Card allLocations={allLocations} />
    </div>
  );
}
