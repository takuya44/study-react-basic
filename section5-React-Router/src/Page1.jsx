import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

const Page1 = () => {
  return (
    <div>
      <h1>Page1ページです。</h1>
      <Link to="/page1/detailA">DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
    </div>
  );
};

export default Page1;
