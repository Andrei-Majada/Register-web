import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100% - 150px);
  padding: 50px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 40px;
  justify-content: flex-end;
  display:flex;
`;

const ButtonRegister = styled.div`
  width: 150px;
`;

const Tableheader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0 60px 0 60px;
  margin-bottom: 28px;
`;

const TableDiv = styled.div`
  flex-direction: column;
  padding: 0 50px 0 50px;
`;

const TableColumn = styled.h6`
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 0.02em;
  color: #303030;
  &:last-child{
    margin-right: 40px;
  }
`;

export {
  Wrapper,
  ButtonContainer,
  TableDiv,
  ButtonRegister,
  Tableheader,
  TableColumn,
};
