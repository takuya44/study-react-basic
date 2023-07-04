import React from "react";

const Practice3 = () => {
  // 以下の関数calcTotalFeeは、引数numの型をnumberとしている。
  // JSだと、引数の型は指定しないが、TSでは指定する。
  // JSの場合、引数に文字列を渡しても、エラーにならない。（暗黙で型変換されてしまう。）
  const calcTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => {
    let total: number = 0;
    total = calcTotalFee(100);
    console.log(total);
  };

  return (
    <div>
      <p>練習問題：変数の型指定</p>
      <button onClick={onClickPractice}>練習問題３を実行</button>
    </div>
  );
};

export default Practice3;
