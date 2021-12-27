import React from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../../assets/imgs/Logo.svg';
import Dashboard from '../../assets/imgs/Dashboard.svg';
import Register from '../../assets/imgs/Registro.svg';
import Logoff from '../../assets/imgs/Logoff.svg';
import DashboardDisable from '../../assets/imgs/DashboardDisable.svg';
import RegisterDisable from '../../assets/imgs/RegistroDisable.svg';

import useAuth from '../../hooks/useAuth';

import {
  StyledMenu,
  MenuLogo,
  MenuItem,
  MenuIcon,
  LogoffButtonDiv,
  LogoffButton,
  MenuItemDisable,
  Menu,
  GreenBar,
} from './styled';

const LateralMenu = ({ role }) => {
  const [, setUserInfo] = useAuth();
  const history = useHistory();

  const handleLoggof = () => {
    setUserInfo(null);
    history.push('/login');
  }

  return (
    <StyledMenu>
      <MenuLogo>
        <MenuIcon src={Logo} />
      </MenuLogo>
      {role === "admin" ? (
        <>
          <Menu>
            <GreenBar />
            <MenuItem to="/dashboard">
              <MenuIcon src={Dashboard} />
            </MenuItem>
          </Menu>
          <MenuItemDisable>
            <MenuIcon src={RegisterDisable} />
          </MenuItemDisable>
        </>
      ) : (
        <>
          <MenuItemDisable>
            <MenuIcon src={DashboardDisable} />
          </MenuItemDisable>
          <Menu>
            <GreenBar />
            <MenuItem to="/meusregistros">
              <MenuIcon src={Register} />
            </MenuItem>
          </Menu>
        </>
      )}
      <LogoffButtonDiv to="/login">
        <LogoffButton onClick={() => handleLoggof()}>
          <MenuIcon src={Logoff} />
        </LogoffButton>
      </LogoffButtonDiv>
    </StyledMenu>
  );
};

export default LateralMenu;