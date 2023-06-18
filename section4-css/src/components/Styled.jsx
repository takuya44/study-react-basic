const StyledJSX = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="button">FIGHT!!</button>
      </div>
      {/* Styled JSX記法の場合、初期設定で「&:hover」は使えない。*/}
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          margin: 8px;
          padding: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 10;
          color: #3d84a8;
        }
        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
          &:hover {
            background-color: #46cdcf;
            color: #fff;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};

export default StyledJSX;
