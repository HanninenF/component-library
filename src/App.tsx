import React from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import CheckBox from "./components/CheckBox/CheckBox";
import Chip from "./components/Chip/Chip";
import Counter from "./components/Counter/Couter";
import RadioButton from "./components/RadioButton/RadioButton";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";

function App() {
  const chips = ["Resor", "Sport", "Matlagning", "Musik"];

  return (
    <>
      <Button title="Click me" />
      <Counter />
      <CheckBox />
      <RadioButton />
      <ToggleSwitch />

      <Chip chips={chips} />
    </>
  );
}

export default App;
