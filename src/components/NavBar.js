import React from 'react';
import styled from 'styled-components/macro';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  font-size: 14px;
`;

const NavLinks = styled.div`
  padding: 0 8px;
  text-decoration: none;
  color: #000;

  svg {
    height: 24px;
    width: 24px;
  }
`;

const LeftLinks = styled.div`
  padding: 10px;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const RightLinks = styled.div`
  padding: 10px;
  margin-right: 16px;
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  return (
    <Nav>
      <LeftLinks>
        <NavLinks >About</NavLinks>
        <NavLinks >Store</NavLinks>
      </LeftLinks>
      <RightLinks>
        <NavLinks >Gmail</NavLinks>
        <NavLinks >Images</NavLinks>
        <AppsIcon />
        <NavLinks
          css={`
            padding-right: 10px;
          `}
        >
        </NavLinks>
          <AccountCircleIcon />
      </RightLinks>
    </Nav>
  );
};

export default Navbar;
