import React from "react";

const Practice4 = () => {
  // 以下の関数calcTotalFeeは、引数numの型をnumberとしている。
  // JSだと、引数の型は指定しないが、TSでは指定する。
  // JSの場合、引数に文字列を渡しても、エラーにならない。（暗黙で型変換されてしまう。）
  // しかし、TSでは、引数に文字列を渡すと、エラーになる。
  // "strict": true,だと、引数の型を指定しないと、エラーになる。
  const calcTotalFee = (num: any) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => {
    calcTotalFee(100);
  };

  return (
    <div>
      <p>練習問題：設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習問題４を実行</button>
    </div>
  );
};

export default Practice4;
