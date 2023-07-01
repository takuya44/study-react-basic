import styled from "styled-components";
import { BaseButton } from "./BaseButton";

const PrimaryButton = (props) => {
  const { children } = props;

  return <SButton>{children}</SButton>;
};

export default PrimaryButton;

const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
