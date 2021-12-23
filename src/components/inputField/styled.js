import styled from 'styled-components';

const InputStyled = styled.input`
  height: 40px;
  width: 100%;
  background: #F2F2F2;
  border: none;
  border-radius: 2px;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  box-sizing: border-box;
  &:focus {
    border: 1px solid #219653;
  }
`;

export {
  InputStyled,
};
