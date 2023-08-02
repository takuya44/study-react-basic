# メモ

### React Router

React Router は React 用のルーティングライブラリで、シングルページアプリケーション（SPA）内でのナビゲーションを管理

<details><summary>React Routerについて</summary>

### 特徴

1. **デクララティブなルーティング**: React Router はコンポーネントを使ってルートを定義するため、React のデクララティブなコーディングスタイルと一貫している。
2. **動的ルーティング**: ページ遷移時にルーティングを動的に生成できます。コード分割や遅延ローディングもサポート。
3. **ネストされたルート**: ルート内に子ルートを定義して、より複雑な UI 構造を作成することができる。
4. **フックの提供**: `useParams`、`useLocation`などのカスタムフックを提供しており、ルートに関連する情報へのアクセスを容易にする。

### メリット

1. **簡単なインテグレーション**: React との統合が容易で、他の React ライブラリともよく連携しやすい。
2. **開発効率**: ルーティングの宣言的な定義は、開発者にとって直感的で理解しやすく、開発の効率を向上させる。
3. **コード分割と遅延ロードのサポート**: 必要な部分だけをロードして表示できるため、パフォーマンスの最適化が可能。
4. **強力なコミュニティサポート**: 広く使用されているライブラリなので、豊富なドキュメント、チュートリアル、コミュニティサポートがあり。

### デメリット

1. **学習曲線**: 初めての利用者にとっては、React Router の概念と API を学ぶ必要があり。
2. **オーバーヘッド**: 小規模なプロジェクトに対しては、機能が豊富すぎる場合があり、必要以上に複雑になる可能性があり。
3. **バージョン間の変更**: 過去に React Router のメジャーバージョンアップ時に大きな変更があったことから、アップグレードする際に注意が必要。5 系と６系など。

### まとめ

React Router は、シングルページアプリケーションのルーティングを容易に扱うことができる強力なツール。そのデクララティブな設計と強力な機能セットは、多くの React 開発者にとって魅力的ですが、プロジェクトの規模と要件に合わせて適切に使用する必要があります。

</details>

### ネストされたページ遷移

<details><summary>サンプルコード</summary>

```js
<Route
  path="/page1"
  render={({ match: { url } }) => (
    <Switch>
      {/* {console.log(url)} */}
      <Route exact path={url}>
        <Page1 />
      </Route>
      <Route path={`${url}detailA`}>
        <Page1DetailA />
      </Route>
      <Route path={`${url}detailB`}>
        <Page1DetailB />
      </Route>
    </Switch>
  )}
/>
```

</details>

### ルート定義の分割

<details><summary>App.js</summary>

```js
import { BrowserRouter, Link } from "react-router-dom";

import Router from "./router/Router";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;
```

</details>

<details><summary>router/Router.jsx</summary>

```js
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Page2 from "../Page2";
import { Page1Routes } from "./Page1Routes";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};

export default Router;
```

</details>

<details><summary>router/Page1Routes.jsx</summary>

````js
import Page1 from "../Page1";
import Page1DetailA from "../Page1DetailA";
import Page1DetailB from "../Page1DetailB";

export const Page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />,
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1DetailA />,
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page1DetailB />,
  },
];```

````

</details>

### Link を使わないページ遷移：useHistory()

<details><summary>サンプルコード</summary>

```js
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Page1DetailA = () => {
  const history = useHistory();

  const onClickBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Page1DetailA</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
```

</details>
