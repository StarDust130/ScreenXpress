/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import "./switchTabs.scss";
const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setleft] = useState(0);

  //! this function is used to change the active tab
  const activeTab = (tab, index) => {
    setleft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };
  return (
    <>
      <div className="switchingTabs">
        <div className="tabItems">
          {data.map((tab, index) => (
            <span
              key={index}
              className={`tabItem ${selectedTab === index ? "active" : ""} `}
              onClick={() => activeTab(tab, index)}
            >
              {tab}
            </span>
          ))}
          <span className="movingBg" style={{ left }}></span>
        </div>
      </div>
    </>
  );
};
export default SwitchTabs;
