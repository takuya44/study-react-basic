import Header from "../atoms/layout/Header";
import Footer from "../atoms/layout/Footer";

const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header style={{ height: "50px", backgroundColor: "red" }}></Header>
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
