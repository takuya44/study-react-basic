import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/">USERS</SLink>
    </SHeader>
  );
};

export default Header;

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;