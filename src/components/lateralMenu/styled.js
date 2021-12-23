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

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  padding-left: 4px;
  border-radius: 4px;
  width: 100%;
  height: 110px;
  background: #FFFFFF;
  cursor: pointer;
  &:hover{
    background: #4bf492;
  }
`;

const MenuIcon = styled(ReactSVG)`
  height: 24px;
  width: 24px;
  padding: 0 0 24px 12px;
`;

export {
  StyledMenu,
  MenuLogo,
  MenuItem,
  MenuIcon,
};
