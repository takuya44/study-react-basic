# メモ

### section7-State-Kanri

- グローバルな state 管理

<details><summary>Reactでのグローバルなstate管理の必要性について</summary>

### 1. グローバルな state 管理の必要性

- **コンポーネント間のデータ共有**: React のコンポーネントは階層的に構成。親コンポーネントから子コンポーネントへのデータの受け渡しは props を使用。しかし、階層が深くなると、中間のコンポーネントを通してデータを渡す必要があり、これを「props drilling」。
  → グローバルな state 管理を導入することで、この問題を解消できる。
- **状態の一貫性**: 複数のコンポーネントで同じデータを使用する場合、そのデータの一貫性を保つことが重要。グローバルな state 管理を使用すると、一元的にデータを管理できるため、データの一貫性を保つことが容易。
- **ビジネスロジックの集約**: グローバルな state 管理ツールを使用すると、ビジネスロジックや非同期処理を集約して管理することができ、コードの再利用性や保守性が向上。

### 2. サンプルコード

以下は、React の Context API を使用したグローバルな state 管理のすごく簡単な例。

```jsx
import React, { createContext, useContext, useState } from "react";

// グローバルなstateを保持するContextを作成
const GlobalStateContext = createContext();

// Providerコンポーネントを定義
export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState("initial value");

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// グローバルなstateを使用するカスタムフックを定義
export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

// 使用例
const ComponentA = () => {
  const { globalState, setGlobalState } = useGlobalState();
  return (
    <div>
      <p>{globalState}</p>
      <button onClick={() => setGlobalState("updated value")}>Update</button>
    </div>
  );
};
```

この例では、`GlobalStateProvider`をアプリケーションのルートに配置することで、その子孫のコンポーネントでグローバルな state を使用することができます。

### まとめ

React でのグローバルな state 管理は、① データの共有、② 一貫性の確保、③ ビジネスロジックの集約など、アプリケーションのスケーラビリティと保守性を向上させるために重要。Context API や Redux、MobX など、さまざまなツールが提供されているので、プロジェクトの要件に合わせて適切なものを選択することが重要。

</details>

- Context での state 管理(基本的な使い方)

<details><summary>Reactでのグローバルなstate管理の必要性について</summary>

```jsx
// 儀式：React暗記いる
import React, { createContext } from "react";

// 参照させるために＝他のコンポーネントに情報を受け取らせるため。
// 今回は、UserIconWithName.jsxで使用する。
export const UserContext = createContext({});

// 儀式：UserProviderで囲んだコンポーネントに情報を受け取らせる
export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "Hello, I am a Context!";

  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};

import "./App.css";
import Router from "./router/Router";
import { UserProvider } from "./providers/UserProvider";

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;

import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

const UserIconWithName = (props) => {
  const { name, image, isAdmin } = props;
  const context = useContext(UserContext);
  console.log(context);// context = {contextName : "Hello, I am a Context!"}

  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

export default UserIconWithName;

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
```

</details>

- Recoil での state 管理

<details><summary>Recoil の特徴とメリットとデメリット</summary>

### 特徴

1. **Atoms**: Recoil の中心的な概念で、アプリケーションの状態を表す単位です。Atom は読み取りと書き込みが可能で、どのコンポーネントからもアクセスできる。
2. **Selectors**: 派生状態や計算された状態を表すための純粋な関数です。他の Atoms や Selectors に依存。
3. **Concurrent Mode 対応**: React の Concurrent Mode との互換性を持っており、非同期処理やデータフェッチに関する最適化が可能。

### メリット

- **シンプルな API**: Recoil は API がシンプルであり、学習曲線が緩やかです。特に小〜中規模のプロジェクトに適している。
- **最適化された再レンダリング**: Atom や Selector の変更時に、関連するコンポーネントのみが再レンダリングされるため、パフォーマンスが向上。
- **柔軟性**: Selector を使用することで、状態の変換や非同期処理を簡単に扱うことが可能 ß。
- **開発ツール**: Recoil の開発ツールはデバッグを容易にする。

### デメリット

- **まだ新しい**: Recoil は比較的新しいライブラリであり、コミュニティやリソースが Redux などの他の状態管理ライブラリに比べて少ない。
- **大規模アプリケーション**: 大規模なアプリケーションや複雑な状態管理が必要な場合、Recoil だけでは不足する場面が出てくるかも。
- **安定性**: まだ開発途中の機能も多く、API の変更などが発生する可能性があり。

### まとめ

Recoil は、シンプルで直感的な API を持つ React の状態管理ライブラリ。特に小〜中規模のプロジェクトや、最適化された再レンダリングを求める場合に適してる。しかし、まだ新しいため、大規模なプロジェクトや長期的なサポートを必要とする場合は、他の成熟した状態管理ライブラリを検討することも考えられる。

</details>
