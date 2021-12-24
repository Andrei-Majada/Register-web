import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button';

import {
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
} from './styled';

const ModalRequest = ({
  onClickCloseModal,
}) => {

  return (
    <ModalAll>
      <ModalDisplay>
        <ModalHeader>
          <ModalHeaderText>Novo Registro</ModalHeaderText>
        </ModalHeader>
        <Line />
        <ModalBody>
          <PlaceholderName>Colaborador</PlaceholderName>
          <NameDisplay>Andrei Majada</NameDisplay>
          <PlaceholderDateHour>Data/Hora</PlaceholderDateHour>
          <DateHourDisplay type="datetime-local"></DateHourDisplay>
          <ButtonsContainer>
            <Button
              onClick={() => {}}
              variant="primary"
            >
              Salvar
            </Button>
            <Button
              onClick={onClickCloseModal}
              variant="secondary"
            >
              Cancelar
            </Button>
          </ButtonsContainer>
        </ModalBody>
      </ModalDisplay>
    </ModalAll>
  );
};

ModalRequest.propTypes = {
  onClickCloseModal: PropTypes.func.isRequired,
};

export default ModalRequest;
