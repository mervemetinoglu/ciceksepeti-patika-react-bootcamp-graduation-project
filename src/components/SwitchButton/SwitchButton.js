import React from "react";
import "./switchButton.style.scss";

const SwitchButton = ({ isToggled = false, onToggle }) => {
  
  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default SwitchButton;
