const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    margin: "8px",
    padding: "8px",
    display: "flex",
    jsutifyContent: "space-around",
    alignItems: "center",
  };

  const titleStyle = {
    margin: "0",
    color: "#3d84a8",
  };

  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px",
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Style -</p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
};

export default InlineStyle;
