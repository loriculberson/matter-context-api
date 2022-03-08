import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Solid from "./components/Solid";
import { MatterContext } from "./MatterContext";

function App() {
  const [elements, setElements] = useState([
    { id: 1, type: "plasma", name: "lightning"},
    { id: 2, type: "plasma", name: "sun"},
    { id: 3, type: "plasma", name: "stars"},
]);

  return (
    <MatterContext.Provider value={elements}>
      <div className="container">
        <Solid />
      </div>
    </MatterContext.Provider>
  )
}

export default App;
