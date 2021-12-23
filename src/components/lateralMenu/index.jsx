import React from 'react';

import Logo from '../../assets/imgs/Logo.svg';
import Dashboard from '../../assets/imgs/Dashboard.svg';
import Register from '../../assets/imgs/Registro.svg';

import {
  StyledMenu,
  MenuLogo,
  MenuItem,
  MenuIcon,
} from './styled';

const LateralMenu = () => {
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
    </StyledMenu>
  );
};

export default LateralMenu;