import "../style/App.css";
import React, { useState } from "react";
import Card from "./Card";
import Header from "./Header";

export default function App() {
  const [location, setLocation] = useState("");

  return (
    <div>
      <Header location={location} setLocation={setLocation} />
      <Card />
    </div>
  );
}
