import React from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import logoImage from "./../../assets/nav_logo.png";
import nav_1 from "./../../assets/nav_1.png";
import nav_2 from "./../../assets/nav_2.png";
import nav_3 from "./../../assets/nav_3.png";
import nav_4 from "./../../assets/nav_4.png";

export const Navbar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  selectedItem,
  setSelectedItem,
  sidebarItems,
}) => {
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleSidebarItemClick = (itemText) => {
    setSelectedItem(selectedItem === itemText ? null : itemText);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <button className="toggle-button" onClick={toggleSidebar}>
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="logo">
              <img src={logoImage} alt="Logo" className="logo-image" />
            </div>
          </div>

          <div className="navbar-right">
            <img src={nav_1} className="social-icon" alt="Social Icon" />
            <img src={nav_2} className="social-icon" alt="Social Icon" />
            <img src={nav_3} className="social-icon" alt="Social Icon" />
            <img src={nav_4} className="social-icon" alt="Social Icon" />
          </div>
        </div>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        {sidebarItems.map((item, index) => (
          <div key={index} className="sidebar-section">
            <div
              className={`sidebar-item ${
                selectedItem === item.text ? "active" : ""
              }`}
              onClick={() => handleSidebarItemClick(item.text)}
            >
              <img src={item.icon} alt={item.text} className="sidebar-icon" />
              <span className="sidebar-text">{item.text}</span>
            </div>

            {selectedItem === item.text && item.content && (
              <div className="sidebar-dropdown">
                <div className="dropdown-content">
                  <div className="content-image-container">
                    <img
                      src={item.content.image}
                      alt={item.content.title}
                      className="content-image"
                    />
                  </div>
                  <h3 className="dropdown-title">{item.content.title}</h3>
                  <p className="dropdown-description">
                    {item.content.description}
                  </p>
                  <p className="dropdown-date">{item.content.releaseDate}</p>
                  <div className="dropdown-buttons">
                    <button className="try-button">TRY IT NOW</button>
                    <button className="buy-button">CLICK TO BUY</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {isSidebarOpen && <div className="overlay" onClick={closeSidebar} />}
    </>
  );
};
