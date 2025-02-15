import { useState } from "react";
import "./ToggleSwitch.scss";
const ToggleSwitch = () => {
  console.log("ToggleSwitch");
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    console.log(isOn);
  };

  return (
    <>
      <label htmlFor="" className="switch">
        <input
          className="checkBox"
          type="checkbox"
          checked={isOn}
          onChange={toggleSwitch}
        />
        <span className="slider"></span>
      </label>
      <p>{isOn ? "Switch is ON" : "Switch is OFF"}</p>
    </>
  );
};
export default ToggleSwitch;
