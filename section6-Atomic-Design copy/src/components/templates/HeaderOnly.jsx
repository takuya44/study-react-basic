import Header from "../atoms/layout/Header";

const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Header style={{ height: "50px", backgroundColor: "red" }}></Header>
      {children}
    </>
  );
};

export default HeaderOnly;
