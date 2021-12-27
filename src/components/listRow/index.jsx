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

const ListRow = ({ register, index }) => {
  const handleDate = (date) => {
    const newDate = new Date(parseInt(date));
    const dateFormatter = `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
    return dateFormatter;
  };

  const handleHour = (hour) => {
    const newHour = new Date(parseInt(hour));
    let dateFormatter;
    const hourFormatter = newHour.getHours();
    const minuteFormatter = newHour.getMinutes();
    if (minuteFormatter < 10) {
      dateFormatter = `${hourFormatter}:0${minuteFormatter}`;
    } else {
      dateFormatter = `${hourFormatter}:${minuteFormatter}`;
    }
    return dateFormatter;
  };

  const handleIndex = (index) => {
    let indexFormatted;
    if (index < 10) {
      indexFormatted = `00${index + 1}`;
    } else {
      indexFormatted = `0${index}`;
    }
    return indexFormatted;
  };

  return (
    <Row>
      <GreenBar />
      <RowFormat>
        <Display>
          <DisplayName>{register.username}</DisplayName>
          <DisplayCode>{handleIndex(index)}</DisplayCode>
        </Display>
        <DisplayDate>{handleDate(register.timeRegistered)}</DisplayDate>
        <DisplayHour>{handleHour(register.timeRegistered)}</DisplayHour>
      </RowFormat>
    </Row>
  );
}

export default ListRow;
