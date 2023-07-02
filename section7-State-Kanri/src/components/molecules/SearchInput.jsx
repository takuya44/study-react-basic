import { memo } from "react";
import styled from "styled-components";

import PrimaryButton from "../atoms/button/PrimaryButton";
import InputForm from "../atoms/input/InputForm";

const SearchInput = memo(() => {
  console.log("SearchInput");

  return (
    <SContainer>
      <InputForm placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

export default SearchInput;

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
