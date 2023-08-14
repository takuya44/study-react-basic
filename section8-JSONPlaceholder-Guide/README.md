# メモ

# section8-JSONPlaceholder データ取得ガイド

JSONPlaceholder。テスト用の REST API。このガイド。axios 使用。JSONPlaceholder からのデータ取得方法。

## 1. axios インストール

axios。プロジェクトへのインストール必要。

```bash
npm install axios
```

yarn 使用時:

```bash
yarn add axios
```

## 2. サンプルコード

以下。axios 使用例。JSONPlaceholder からの投稿データ取得。

```javascript
import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();
```

このコード。JSONPlaceholder の`/posts`エンドポイントからの投稿データ取得。コンソール表示。

## 3. まとめ

axios。JSONPlaceholder 等の API からのデータ取得容易。上記手順とサンプルコード。参考に。
