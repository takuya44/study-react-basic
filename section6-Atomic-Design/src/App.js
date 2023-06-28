import "./App.css";
import PrimaryButton from "./components/atoms/button/PrimaryButton";
import SecondaryButton from "./components/atoms/button/SecondaryButton";
import SearchInput from "./components/molecules/SearchInput";
import UserCard from "./components/organisms/user/UserCard";

const user = {
  name: "シモン",
  image: "./img/dog01.jpg",
  email: "1111@aaa.com",
  phone: "090-1111-1111",
  company: {
    name: "テスト株式会社",
  },
  website: "https://google.com",
};

function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}

export default App;
