import React from "react";
import "./App.css";
import Links from "./constants/socialLinks";
import AccordionThing from "./AccordionThing";

function App() {
  return (
    <div className="App">
      <h1>Yeah buddy</h1>
      <h2>List: Dynamic Prop Styling</h2>
      <h3>No Props</h3>
      <Links />
      <hr />
      <h3>With Props</h3>
      <Links styleClass="links-end" />
      <hr />
      <h3>Component that evaluates boolean in class list</h3>
      <AccordionThing />
    </div>
  );
}

export default App;
