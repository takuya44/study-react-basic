import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです。</h1>
      <Link to="/page2/100">URL Parameter</Link>
      <br />
      <Link to="/page2/999?name=hogohogo">クエリ Parameter</Link>
    </div>
  );
};

export default Page2;
