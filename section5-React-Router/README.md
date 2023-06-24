# メモ

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

</details>
````
