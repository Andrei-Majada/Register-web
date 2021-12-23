import React from 'react';

import {
  Row,
  GreenBar,
  RowFormat,
  DisplayName,
  DisplayDate,
  DisplayHour,
  Display,
  DisplayCode,
} from './styled';

const ListRow = () => (
  <Row>
    <GreenBar />
    <RowFormat>
      <Display>
        <DisplayName>Andrei Majada</DisplayName>
        <DisplayCode>001</DisplayCode>
      </Display>
      <DisplayDate>12/10/19</DisplayDate>
      <DisplayHour>9:00h</DisplayHour>
    </RowFormat>
  </Row>
);

export default ListRow;
