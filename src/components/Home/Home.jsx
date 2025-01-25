import React, { useState } from "react";
import homeLogo from "../../assets/home_logo.png";
import "./Home.css";

export const Home = ({
  isSidebarOpen,
  setIsSidebarOpen,
  selectedItem,
  setSelectedItem,
  sidebarItems,
}) => {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const keyboardShortcuts = [
    { action: "buy current selected script", key: "F1" },
    { action: "teleport to point", key: "F2" },
    { action: "activate/deactivate noclip", key: "F3" },
    { action: "open/close inventory", key: "Tab" },
    { action: "pause/resume game", key: "Esc" },
  ];

  const mapPoints = [
    { top: "45%", right: "40%", item: "Advanced Miner Job" },
    { top: "50%", left: "45%", item: "Gardener Job" },
    { top: "60%", right: "35%", item: "Infinite Jobs" },
    { top: "70%", left: "60%", item: "Advanced Progress Bar" },
    { top: "40%", right: "25%", item: "Modern Vehicle Shop" },
    { top: "30%", left: "60%", item: "Infinite Activities" },
    { top: "45%", right: "55%", item: "Flight School" },
    { top: "50%", left: "30%", item: "Boat School" },
    { top: "55%", left: "40%", item: "License System" },
    { top: "30%", left: "30%", item: "Advanced Garbage Job" },
  ];

  const handleMapPointClick = (item) => {
    setSelectedItem(item);
    setIsSidebarOpen(true);
    console.log(`Navigating to: ${item}`);
  };

  return (
    <div className="home-container">
      <img src={homeLogo} alt="Home background" className="home-background" />
      <div className="map-points-wrapper">
        {mapPoints.map((point, index) => (
          <div
            key={index}
            className="map-point-container"
            style={{
              top: point.top,
              left: point.left,
              right: point.right,
            }}
          >
            <div
              className="map-point"
              onMouseEnter={() => setHoveredPoint(point.item)}
              onMouseLeave={() => setHoveredPoint(null)}
              onClick={() => handleMapPointClick(point.item)}
            />
            {hoveredPoint === point.item && (
              <div className="point-tooltip">{point.item}</div>
            )}
          </div>
        ))}
      </div>

      {isSidebarOpen ? null : (
        <div className="shortcuts-panel">
          <h4>keyboard shortcuts</h4>
          <ul>
            {keyboardShortcuts.map((shortcut, index) => (
              <li key={index}>
                {shortcut.action}
                <span className="key">{shortcut.key}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
