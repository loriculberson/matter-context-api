import React, { useContext } from "react";
import { MatterContext } from "../MatterContext";

export default function Plasma() {
  const context = useContext(MatterContext);
  console.log('cx', context)
  const elements = context.map((element, index) => <li key={index}>{element.type}: {element.name}</li>)
  return (
    <div>
      <h1>Elements</h1>
      <ul>{elements}</ul>

    </div>

  )
}
