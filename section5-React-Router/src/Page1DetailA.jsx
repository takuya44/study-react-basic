import { useLocation } from "react-router-dom";

const Page1DetailA = () => {
  // const location = useLocation();
  // console.log(location);
  const { state } = useLocation();
  console.log(state); // 結果：[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div>
      <h1>Page1DetailAページです。</h1>
    </div>
  );
};

export default Page1DetailA;
