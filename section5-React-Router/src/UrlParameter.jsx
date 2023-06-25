import {
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  // console.log(query.get("name"));

  return (
    <div>
      <h1>UrlParameterページです。</h1>
      <p>パラメーターは{id}です</p>
      <p>パラメーターは{query.get("name")}です</p>
    </div>
  );
};

export default UrlParameter;
