import styled from "styled-components";

const Footer = () => {
  return <SFooter>&copy; 2021 test Inc.</SFooter>;
};

export default Footer;

const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  postion: fixed;
  bottom: 0;
  width: 100%;
`;
