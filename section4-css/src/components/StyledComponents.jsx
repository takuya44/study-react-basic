import styled from "styled-components";

const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- styled Components -</STitle>
      <SButton>FIGHT!!</SButton>
    </SContainer>
  );
};

export default StyledComponents;

const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  margin: 8px;
  padding: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 10;
  color: #3d84a8;
`;

const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
