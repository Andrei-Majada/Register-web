import React, { useState } from 'react';
import { useMutation } from "@apollo/react-hooks";

import Button from '../button';
import { CREATEREGISTER } from '../../graphql/mutations';

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
  username,
}) => {
  const [timeRegistered, setTimeRegistered] = useState('');

  function getToken() {
    let login = localStorage.getItem('userInfo');
    let teste = JSON.parse(login)
    return `Bearer ` + teste?.login?.token;
  }

  const [create, { loading, error }] = useMutation(CREATEREGISTER, {
    context: {
      headers: {
        Authorization:  getToken(),
      }
    },
    onCompleted: (data) => {
      onClickCloseModal();
    }
  });

  const handleTime = () => {
    const newTime = new Date(timeRegistered);
    const timestamp = newTime.getTime();
    const timeString = timestamp.toString();
    create({variables: { timeRegistered: timeString }})
  }

  return (
    <ModalAll>
      <ModalDisplay>
        <ModalHeader>
          <ModalHeaderText>Novo Registro</ModalHeaderText>
        </ModalHeader>
        <Line />
        <ModalBody>
          <PlaceholderName>Colaborador</PlaceholderName>
          <NameDisplay>{username}</NameDisplay>
          <PlaceholderDateHour>Data/Hora</PlaceholderDateHour>
          <DateHourDisplay type="datetime-local" onChange={(e) => setTimeRegistered(e.target.value)}></DateHourDisplay>
          <ButtonsContainer>
            <Button
              onClick={() => handleTime()}
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

export default ModalRequest;
