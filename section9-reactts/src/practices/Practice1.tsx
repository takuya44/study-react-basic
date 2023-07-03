import React from "react";

const Practice1 = () => {
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

  return (
    <div>
      <p>練習問題：引数の指定</p>
      <button onClick={onClickPractice}>練習問題１を実行</button>
    </div>
  );
};

export default Practice1;
