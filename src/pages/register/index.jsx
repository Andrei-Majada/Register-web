import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from 'react-router-dom';

import Button from '../../components/button';
import ListRow from '../../components/listRow';
import Modal from '../../components/modalRegister';
import { LISTEMPLOYEE } from  '../../graphql/queries';
import verifyToken from  '../../validator';

import {
  Wrapper,
  ButtonContainer,
  TableDiv,
  ButtonRegister,
  Tableheader,
  TableColumn,
} from './styled';

const Register = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [employeeRegister, setEmployeeRegister] = useState([]);

  const getToken = () => {
    const login = localStorage.getItem('userInfo');
    const temp = JSON.parse(login);
    return `Bearer ` + temp?.login?.token;
  }

  const getName = () => {
    const login = localStorage.getItem('userInfo');
    const temp = JSON.parse(login)
    return temp?.login?.name;
  }

  const { refetch } = useQuery(LISTEMPLOYEE, {
    context: {
      headers: {
        Authorization:  getToken(),
      }
    },
    onCompleted: (data) => {
      setEmployeeRegister(data?.listEmployeeRegister);
    },
    onError: (err) => {
      const invalidToken = verifyToken(getToken());
      if (invalidToken) {
        localStorage.removeItem('userInfo');
        history.push("/login");
      }
    },
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
