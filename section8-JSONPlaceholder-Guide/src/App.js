import "./App.css";
import axios from "axios";

function App() {
  const onClickUesrs = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickUesr1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickUesrs}>users</button>
      <button onClick={onClickUesr1}>id=1のuser</button>
    </div>
  );
}

export default App;
