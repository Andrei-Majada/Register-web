import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

const StyledMenu = styled.menu`
  background: #FFFFFF;
  height: 100%;
  width: 130px;
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

const MenuLogo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 18px;
  width: 100%;
  height: 110px;
  background: #FFFFFF;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  /* padding-left: 4px; */
  border-radius: 4px;
  width: 100%;
  height: 110px;
  background: #FFFFFF;
  cursor: pointer;
`;

const MenuItemDisable = styled.div`
  display: flex;
  align-items: center;
  padding-left: 4px;
  border-radius: 4px;
  width: 100%;
  height: 110px;
  background: #FFFFFF;
  cursor: default;
`;

const LogoffButtonDiv = styled.div`
  display: flex;
  padding: 0 0 40px 40px;
  position: fixed;
  bottom: 0;
`;

const LogoffButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: #FFFFFF;
`;

const MenuIcon = styled(ReactSVG)`
  height: 24px;
  width: 24px;
  padding: 0 0 24px 12px;
`;

const GreenBar = styled.div`
  height: 80%;
  width: 4px;
  margin: 20px 0 0 0;
  background: #6FCF97;
  border-radius: 30px;
`;

export {
  StyledMenu,
  MenuLogo,
  MenuItem,
  MenuIcon,
  LogoffButtonDiv,
  LogoffButton,
  MenuItemDisable,
  Menu,
  GreenBar,
};
