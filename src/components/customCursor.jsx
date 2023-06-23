import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        pointerEvents: "none",
        position: "fixed",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        cursor: "none",
      }}
    ></div>
  );
};

export default CustomCursor;
