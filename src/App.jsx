// Product Backlog

import { useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  const [darkMode, setDarkMode] = useState(false); // State to track dark mode

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <>
      <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      <Meme darkMode={darkMode} />
    
    </>
  );
}

export default App;
