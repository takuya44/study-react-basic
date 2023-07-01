import styled from "styled-components";

const InputForm = (props) => {
  const { placeholder = "" } = props;

  return (
    <div>
      <SInputForm type="text" placeholder={placeholder} />
    </div>
  );
};

export default InputForm;

const SInputForm = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;
