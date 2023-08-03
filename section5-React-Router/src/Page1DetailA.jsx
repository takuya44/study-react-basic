import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Page1DetailA = () => {
  // const location = useLocation();
  // console.log(location);
  // 結果：{pathname: '/page1/detailA', state: Array(10), search: '', hash: '', key: 'o1oyib'}
  const { state } = useLocation();
  // console.log(state); // 結果：[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const history = useHistory();

  const onClickBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Page1DetailAページです。</h1>
      <button onClick={onClickBack}>戻る</button>
      {/* <button onClick={() => history.goBack()}>戻る</button> */}
    </div>
  );
};

export default Page1DetailA;
