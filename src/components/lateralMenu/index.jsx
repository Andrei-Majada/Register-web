import React from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../../assets/imgs/Logo.svg';
import Dashboard from '../../assets/imgs/Dashboard.svg';
import Register from '../../assets/imgs/Registro.svg';
import Logoff from '../../assets/imgs/Logoff.svg';

import useAuth from '../../hooks/useAuth';

import {
  StyledMenu,
  MenuLogo,
  MenuItem,
  MenuIcon,
  LogoffButtonDiv,
  LogoffButton,
} from './styled';

const LateralMenu = () => {
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
      <MenuItem to="/dashboard">
        <MenuIcon src={Dashboard} />
      </MenuItem>
      <MenuItem to="/meusregistros">
        <MenuIcon src={Register} />
      </MenuItem>
      <LogoffButtonDiv to="/login">
        <LogoffButton onClick={() => handleLoggof()}>
          <MenuIcon src={Logoff} />
        </LogoffButton>
      </LogoffButtonDiv>
    </StyledMenu>
  );
};

export default LateralMenu;