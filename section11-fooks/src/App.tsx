import React, { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import axios from "axios";
import { User } from "./types/api/user";
import { UserProfile } from "./types/UserProfile";

// const user = {
//   id: 1,
//   name: "じゃけぇ",
//   email: "1234@gamil.com",
//   address: "東京",
// };

function App() {
  const [UserProfiles, setUserProfiles] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(UserProfiles);

  const onclickFetchUser = () => {
    setLoading(true);
    setError(false);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`,
        }));
        setUserProfiles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <button onClick={onclickFetchUser}>データ取得</button>
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました。</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {UserProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
