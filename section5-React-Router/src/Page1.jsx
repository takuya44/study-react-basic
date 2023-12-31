import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

const Page1 = () => {
  const arr = [...Array(10).keys()];

  const history = useHistory();

  const onClickDetailA = () => {
    history.push("page1/detailA");
  };

  return (
    <div>
      <h1>Page1ページです。</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};

export default Page1;
