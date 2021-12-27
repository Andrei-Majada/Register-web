import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/react-hooks";

import Button from '../../components/button';
import ListRow from '../../components/listRow';
import Modal from '../../components/modalRegister';
import { LISTEMPLOYEE } from  '../../graphql/queries';

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
  const [employeeRegister, setEmployeeRegister] = useState([]);

  function getToken() {
    let login = localStorage.getItem('userInfo');
    let temp = JSON.parse(login)
    return `Bearer ` + temp?.login?.token;
  }

  function getName() {
    let login = localStorage.getItem('userInfo');
    let temp = JSON.parse(login)
    return temp?.login?.name;
  }

  const { loading, error, refetch } = useQuery(LISTEMPLOYEE, {
    context: {
      headers: {
        Authorization:  getToken(),
      }
    },
    onCompleted: (data) => {
      setEmployeeRegister(data?.listEmployeeRegister);
    }
  });

  useEffect(() => {
    refetch();
  }, [showModal])

  return (
    <Wrapper>
      {showModal && (
        <Modal username={getName()}onClickCloseModal={() => setShowModal(false)}/>
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
        {employeeRegister.map((register, index) => {
          return (
            <div key={register.id}>
              <ListRow register={register} index={index}/>
            </div>
          );
        })}
      </TableDiv>
    </Wrapper>
  );
};

export default Register;
