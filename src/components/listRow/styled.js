import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  overflow: hidden;
  background: #FFFFFF;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 32px;
`;

const GreenBar = styled.div`
  height: calc(100% - 40%);
  width: 4px;
  margin-left: 20px;
  background: #6FCF97;
  border-radius: 30px;
`;

const RowFormat = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 40px 0 40px;
`;

const Display = styled.div`
  display: flex;
  flex-direction: column;
`;

const DisplayName = styled.h6`
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 0.02em;
  color: #303030;
`;

const DisplayCode = styled.p`
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #303030;
`;

const DisplayDate = styled.h6`
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #888888;
  margin-right: 30px;
`;

const DisplayHour = styled.h6`
  font-size: 39px;
  line-height: 53px;
  letter-spacing: 0.02em;
  color: #888888;
`;

export {
  Row,
  GreenBar,
  RowFormat,
  DisplayName,
  DisplayDate,
  DisplayHour,
  Display,
  DisplayCode,
};
