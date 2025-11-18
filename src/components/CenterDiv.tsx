const CenterDiv = () => {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        background: "blue",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          background: "red",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      ></div>
    </div>
  );
};

export default CenterDiv;
