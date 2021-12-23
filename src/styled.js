import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ContentWrapper = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;
  background-color: #E5E5E5;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export {
  PageWrapper,
  ContentWrapper,
};