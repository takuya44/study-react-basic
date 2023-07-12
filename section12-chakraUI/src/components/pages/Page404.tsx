import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <h1>ページが見つかりません。</h1>
      <Link to="/">TOPへ戻る</Link>
    </div>
  );
};

export default Page404;
