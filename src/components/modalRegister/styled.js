import styled from 'styled-components';

const ModalAll = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  border: 1px;
  top: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter:blur(4px);
  color: #000000;
  display: flex;
  justify-content: end;
`;
const ModalDisplay = styled.div`
  background: #FFFFFF;
  width: 400px;
`;
const ModalHeader = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  height: 36px;
  background-color: #FFFFFF;
  padding: 32px 0 0 24px;
  margin-bottom: 16px;
`;
const ModalHeaderText = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #303030;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: center;
  align-items: center;
  padding: 30px 0 30px 0;
  position: fixed;
  bottom: 0;
  & button{
    margin-left: 16px;
    height: 40px;
  }
`;

const ModalBody = styled.div`
  padding: 50px 40px 160px 40px;
  border-bottom: 1px solid #363636;
`;

const PlaceholderName = styled.h4`
  font-size: 14px;
  line-height: 17px;
  color: #303030;
  margin-bottom: 20px;
`;

const NameDisplay = styled.h1`
  font-weight: 300;
  font-size: 23px;
  line-height: 28px;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  color: #303030;
  margin-bottom: 50px;
`;

const PlaceholderDateHour = styled.h4`
  font-size: 14px;
  line-height: 17px;
  color: #303030;
  margin-bottom: 20px;
`;

const DateHourDisplay = styled.input`
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.21em;
  color: #BDBDBD;
  margin-bottom: 50px;
`;

const Line = styled.div`
  background-color: #363636;
  width: 100%;
  height: 1px;
`;

export {
  ModalAll,
  ModalDisplay,
  ModalHeader,
  ModalHeaderText,
  ButtonsContainer,
  ModalBody,
  Line,
  PlaceholderName,
  NameDisplay,
  PlaceholderDateHour,
  DateHourDisplay,
};
