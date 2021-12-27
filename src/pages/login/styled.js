import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #303030;
`;

const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  padding: 52px;
  width: 300px;
  align-self: center;
  justify-self: flex-end;
  background: #FFFFFF;
  border-radius: 40px;
  margin-right: 60px;
  z-index: 1000;
`;

const SubTitle = styled.h6`
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #000000;
  padding-bottom: 10px;
`;

const DivInput = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;

const DivButton = styled.div`
  width: 30%;
  padding-bottom: 10px;
`;

const Logo = styled.img`
  height: 300px;
  width: 250px;
  margin-left: 200px;
`;

const GreenDisplayImage = styled.img`
  position: absolute;
  right: 0;
  height: 600px;
  width: 600px;
`;

export {
  Wrapper,
  DivLogin,
  SubTitle,
  DivInput,
  DivButton,
  Logo,
  GreenDisplayImage,
};
