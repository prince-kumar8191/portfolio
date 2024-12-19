import React, { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("Red");

  const handleMouseEnter = () => {
    setBgColor("blue");
  };

  const handleMouseLeave = () => {
    setBgColor("Red");
  };

  return (
    <button
      style={{ backgroundColor: bgColor, color: "white", padding: "20px 55px", border: "none", fontSize: "16px", cursor: "pointer", transition:"0.8s"}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      My Resume
    </button>
  );
}

export default App;