import styled from "styled-components";
import { BaseButton } from "./BaseButton";

const SecondaryButton = (props) => {
  const { children, onClick } = props;

  return <SButton onClick={onClick}>{children}</SButton>;
};

export default SecondaryButton;

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;

// const SButton = styled.button`
//   background-color: #11999e;
//   color: #fff;
//   padding: 6px 24px;
//   border: none;
//   border-radius: 9999px;
//   outline: none;
//   &:hover {
//     cursor: pointer;
//     opacity: 0.8;
//   }
// `;
