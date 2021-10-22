import React from "react";
import "./dropdown.scss";
import DropDownItem from "./DropDownItem";

const DropDown = ({ items, name, label }) => {
  return (
    <div className="select_container">
      <select name={name} id={name} defaultValue={"DEFAULT"}>
        <option disabled value="DEFAULT">
          {label} seç
        </option>
        {items.map((item) => (
          <DropDownItem item={item.title} key={item.id} />
        ))}
      </select>
    </div>
  );
};

export default DropDown;
