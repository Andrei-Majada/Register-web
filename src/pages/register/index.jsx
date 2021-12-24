import React, { useState } from 'react';

import Button from '../../components/button';
import ListRow from '../../components/listRow';
import Modal from '../../components/modalRegister';

import {
  Wrapper,
  ButtonContainer,
  TableDiv,
  ButtonRegister,
  Tableheader,
  TableColumn,
} from './styled';

const Register = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Wrapper>
      {showModal && (
        <Modal onClickCloseModal={() => setShowModal(false)}/>
      )}
      <ButtonContainer>
        <ButtonRegister>
          <Button
          onClick={() => setShowModal(true)}
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

export default Register;
