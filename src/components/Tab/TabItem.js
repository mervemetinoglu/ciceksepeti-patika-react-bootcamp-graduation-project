import React from "react";
import "./tab.style.scss";

const TabItem = ({ activeTab, label, onClick }) => {
  let className = "tab__list-item";
  if (activeTab === label) className += " tab__list-active";

  return (
    <li className={className} onClick={onClick}>
      {label}
    </li>
  );
};

export default TabItem;
