import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const UrlParameter = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>UrlParameterページです。</h1>
      <p>パラメーターは{id}です</p>
    </div>
  );
};

export default UrlParameter;
