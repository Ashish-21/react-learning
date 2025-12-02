import React, { useState } from "react";

const Mouse = ({ render }: any) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    setPosition({
      ...position,
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        height: "100vh",
        width: "100vh",
      }}
    >
      {render(position)}
    </div>
  );
};

const RenderProps = () => {
  return (
    <Mouse
      render={(position) => (
        <div>
          {position.x}-{position.y}
        </div>
      )}
    />
  );
};

export default RenderProps;
