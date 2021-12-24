import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/button';
import ListRow from '../../components/listRow';

import {
  Wrapper,
  ButtonContainer,
  TableDiv,
  ButtonRegister,
  Tableheader,
  TableColumn,
} from './styled';

const Dashboard = () => (
  <Wrapper>
    <Tableheader>
        <TableColumn>Colaborador</TableColumn>
        <TableColumn>Data</TableColumn>
        <TableColumn>Hora</TableColumn>
      </Tableheader>
    <TableDiv>
      <ListRow />
      <ListRow />
      <ListRow />
      <ListRow />
      <ListRow />
    </TableDiv>
  </Wrapper>
);

export default Dashboard;
