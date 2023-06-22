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
