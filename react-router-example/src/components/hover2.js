import React, { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("Blue");

  const handleMouseEnter = () => {
    setBgColor("black");
  };

  const handleMouseLeave = () => {
    setBgColor("blue");
  };

  return (
    <button
      style={{ backgroundColor: bgColor, color: "white", padding: "20px 55px", border: "none", fontSize: "16px", cursor: "pointer", transition:"0.8s"}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Watch
    </button>
  );
}

export default App;