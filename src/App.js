import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Solid from "./components/Solid";
import { MatterContext } from "./MatterContext";

function App() {
  const [elements, setElements] = useState([
    { type: "plasma", name: "lightning"},
    { type: "plasma", name: "sun"},
    { type: "plasma", name: "stars"},
]);

  return (
    <MatterContext.Provider value={elements}>
      <div className="container">
        <Solid />
      </div>
    </MatterContext.Provider>
  );
}

export default App;
