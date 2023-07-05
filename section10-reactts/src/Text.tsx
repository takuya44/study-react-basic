import { FC, VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;

  return <p style={{ color, fontSize }}>Text</p>;
};

export default Text;
