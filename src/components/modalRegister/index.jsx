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

  const getToken = () => {
    const login = localStorage.getItem('userInfo');
    const teste = JSON.parse(login)
    return `Bearer ` + teste?.login?.token;
  }

  const [create] = useMutation(CREATEREGISTER, {
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

  const formattedName = () => {
    const re = /(\b[a-z](?!\s))/g;
    return username.replace(re, (x) => x.toUpperCase());
  };

  return (
    <ModalAll>
      <ModalDisplay>
        <ModalHeader>
          <ModalHeaderText>Novo Registro</ModalHeaderText>
        </ModalHeader>
        <Line />
        <ModalBody>
          <PlaceholderName>Colaborador</PlaceholderName>
          <NameDisplay>{formattedName()}</NameDisplay>
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
