import React from "react";
import Switch from "react-switch";

const Header = ({ darkMode, onToggleDarkMode }) => {
  return (
    <header className={`header ${darkMode ? 'dark-theme' : ''}`}>
      <img src="../../public/troll-face.png" className="header--image" alt="Troll Face" />
      <h1 className="header--title">Meme Generator</h1>
      <h4 className="header--project">Developed & Designed By</h4>
      <h3 className="header--project2">: Aditi Jain</h3>

      {/* tag for screen readers */}
      <label className="header--toggle">   
      <span className="header--toggle text">Dark Mode:</span>
      <Switch 
        onChange={onToggleDarkMode} 
        checked={darkMode}
        onColor="#808B2D"  // Switch on color
        offColor="#ccc"   // Switch off color
        checkedIcon={false}
        uncheckedIcon={false}
        height={20} // Height of switch
        width={48}  // Width of switch
        handleDiameter={24} // Diameter of the handle
      />
      </label>
    </header>
  );
};

export default Header;
