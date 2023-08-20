# メモ

# section9-reactts

<details><summary>TypeScriptの基本の型</summary>

```TypeScript
// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字
let str: string = "A";

// Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple 配列（複数の型を持たせることができる）
let tuple: [number, string] = [0, "A"];

// any 何でも入る (なるべく使わない)
let any1: any = false;

// void 何も返さない
const funcA = (): void => {
const test = "TEST";
};

// null 何もない
let null1: null = null;

// undefined 未定義
let undefined1: undefined = undefined;

// object オブジェクト型
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAA" };
```

</details>

<details><summary>TypeScriptの基本の型</summary>

```TypeScript
  // 以下の関数calcTotalFeeは、引数numの型をnumberとしている。
  //   JSだと、引数の型は指定しないが、TSでは指定する。
  // JSの場合、引数に文字列を渡しても、エラーにならない。（暗黙で型変換されてしまう。）
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => {
    calcTotalFee(100);
  };
```

</details>
