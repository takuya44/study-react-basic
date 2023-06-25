import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

const Page1 = () => {
  const arr = [...Array(10).keys()];

  return (
    <div>
      <h1>Page1ページです。</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
    </div>
  );
};

export default Page1;
