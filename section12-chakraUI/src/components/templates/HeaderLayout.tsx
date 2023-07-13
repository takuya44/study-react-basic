import { memo, ReactNode, VFC } from "react";

import Header from "../organisms/layout/Header";

type Props = {
  children: ReactNode;
};

const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});

export default HeaderLayout;
