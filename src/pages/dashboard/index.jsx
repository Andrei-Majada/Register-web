import React from 'react';

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

const Dashboard = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <ButtonRegister>
          <Button
          onClick={() => {}}
          variant="primary"
        >
          Registrar
        </Button>
        </ButtonRegister>
      </ButtonContainer>
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
};

export default Dashboard;
