# section12-chakraUI

# ユーザー管理アプリ

## 概要および機能一覧

- ログイン機能
- ホーム画面
- TOP 画面

## 環境

編集中

- React 17.0.1
- Typescript 4.9.5
- chakra-ui/react 1.8.9
- chakra-ui/system 1.2.1
- chakra-ui/icons 1.0.4
- axios 1.4.0
- react-router 5.0.1
  &thinsp;&nbsp;

## 画面遷移

```mermaid
stateDiagram
    [*] --> "ログイン画面"
    "ログイン画面" --> "ホーム画面"
    "ホーム画面" --> "TOP画面"
    "ホーム画面" --> "ユーザー一覧画面"
    "ユーザー一覧画面" --> "ユーザー詳細画面"
    "ホーム画面" --> "設定画面"
```

## 構造

<details><summary>階層</summary>

```TypeScript
.
├── README.md
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── logo192.png
├── .gitignore
├── package-lock.json
├── package.json
├── tsconfig.json
└── src
    ├── index.tsx
    ├── App.tsx
    ├── types
    │   └── user.ts
    ├── providers
    │   └── LoginUserProvider.tsx
    ├── App.css
    ├── index.css
    ├── img
    │   └── dog01.jpg
    ├── components
    │   ├── molecules
    │   │   └── MenuDrawer.tsx
    │   ├── atoms
    │   │   ├── button
    │   │   │   ├── PrimaryButton.tsx
    │   │   │   └── MenuIconButton.tsx
    │   ├── templates
    │   │   └── HeaderLayout.tsx
    │   └── pages
    │       ├── Page404.tsx
    │       ├── Login.tsx
    │       ├── Home.tsx
    │       ├── UserManagement.tsx
    │       └── Setting.tsx
    ├── organisms
    │   ├── layout
    │   │   └── Header.tsx
    │   └── user
    │       ├── UserCard.tsx
    │       └── UserDetailModal.tsx
    ├── theme
    │   └── theme.ts
    ├── hooks
    │   ├── useLoginUser.ts
    │   ├── useSelectUser.ts
    │   ├── useAllUsers.ts
    │   ├── useMessage.ts
    │   └── useAuth.ts
    ├── react-app-env.d.ts
    └── router
        ├── Router.tsx
        └── HomeRoutes.tsx
```

</details>
&thinsp;&nbsp;
