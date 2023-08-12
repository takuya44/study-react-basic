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
