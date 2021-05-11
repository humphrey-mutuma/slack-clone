import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
        // TODO add onclick
        />
        <AccessTimeIcon />
      </HeaderLeft>
      {/* header search */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search PAPAFAM" />
      </HeaderSearch>
      {/* header right */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px solid gray;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
  > .MuiSvgIcon-root:last-child {
    font-size: small;
  }
`;
const HeaderAvatar = styled(AccountCircleIcon)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const HeaderRight = styled.div`
  flex:0.3;
  display:flex;
  align-items:flex-end;

  >.MuiSvgIcon-root {
    margin-left:auto;
    margin-right:20px;
  }
`;
