import React from "react";
import "./dropdown.scss";

const DropDownItem = ({ item }) => {
  const capitializeItem = (text) =>
    text.replace(/(^\w|\s\w)/g, (firstLetter) => firstLetter.toUpperCase());

  return (
    <option value={item} className="option">
      {capitializeItem(item)}
    </option>
  );
};

export default DropDownItem;
