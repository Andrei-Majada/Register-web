import styled, { css } from 'styled-components';

const primaryStyle = css`
  background: #219653;  
  border: 1px solid #219653;
  color: #FFFFFF;
  font-size: 16px;
  height: 60px;
  line-height: 20px;
  padding: 0px 16px;
  &:hover{
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }
  &:active{
    background: #219653;
  }
  &:disabled{
    background: #1010104D;
    border-color:#1010104D;
    cursor: not-allowed;
  }
`;
const secondaryStyle = css`
  background: #FCFCFC;  
  border: 1px solid #219653;
  color: #219653;
  font-size: 16px;
  line-height: 20px;
  padding: 0px 16px;
  height: 40px;
  &:hover{
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }
  &:active{
    background: #CEF2DA;
  }
  &:disabled{
    color: #1010104D;
    border-color:#1010104D;
    cursor: not-allowed;
  }
`;

const getVariantStyle = (variant) => {
  if (variant === 'secondary') {
    return secondaryStyle;
  }
  return primaryStyle;
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${({ variant }) => getVariantStyle(variant)}
`;

export {
  StyledButton,
};
