import React, { useState, useEffect } from "react";
import "./tab.style.scss";
import TabItem from "./TabItem";
import { useHistory } from "react-router-dom";

const Tabs = ({ label, children, filterProducts, isFilter }) => {
  const [activeTab, setActiveTab] = useState(label);
  const history = useHistory();

  const onClickTabItem = (tabName) => {
    setActiveTab(tabName);
    if (isFilter) {
      history.push({
        pathname: "/",
        search: `?query=${tabName}`,
      });
      filterProducts();
    }
  };

  useEffect(() => {
    if (isFilter) filterProducts();
  }, [filterProducts, isFilter]);

  return (
    <div className="tabs">
      <ol className="tab__list">
        {children.map((child) => {
          const { label } = child.props;
          return (
            <TabItem
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={() => onClickTabItem(child.props.label)}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default Tabs;
