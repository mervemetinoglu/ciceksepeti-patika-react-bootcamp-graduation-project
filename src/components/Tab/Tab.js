import React from "react";
import "./tab.style.scss";
import { useHistory } from "react-router-dom";

const Tabs = ({ activeTab, children, onClickItem, setActiveTab }) => {
  const history = useHistory();

  return (
    <div className="tabs">
      <div
        className={
          activeTab === null 
            ? "tab__list-item tab__list-active"
            : "tab__list-item"
        }
        onClick={() => {
          setActiveTab(null);
          history.push("/");
        }}
      >
        Hepsi
      </div>
      {children.map((child) => {
        const { label } = child.props;

        return (
          <div
            key={label}
            className={
              activeTab === label
                ? "tab__list-item tab__list-active"
                : "tab__list-item"
            }
            onClick={() => onClickItem(label)}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
