import React, { useState } from 'react';
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from 'react-router-dom';

import ListRow from '../../components/listRow';
import { LISTADMIN } from  '../../graphql/queries';
import verifyToken from  '../../validator';

import {
  Wrapper,
  TableDiv,
  Tableheader,
  TableColumn,
} from './styled';

const Dashboard = () => {
  const history = useHistory();
  const [adminRegister, setAdminRegister] = useState([]);
  const getToken = () => {
    const login = localStorage.getItem('userInfo');
    const temp = JSON.parse(login)
    return `Bearer ` + temp?.login?.token;
  }

  useQuery(LISTADMIN, {
    context: {
      headers: {
        Authorization:  getToken(),
      }
    },
    onCompleted: (data) => {
      setAdminRegister(data?.listAdminRegister);
    },
    onError: (err) => {
      const invalidToken = verifyToken(getToken());
      if (invalidToken) {
        localStorage.removeItem('userInfo');
        history.push("/login");
      }
    },
    pollInterval: 2000,
  });
  
  return (
    <Wrapper>
      <Tableheader>
          <TableColumn>Colaborador</TableColumn>
          <TableColumn>Data</TableColumn>
          <TableColumn>Hora</TableColumn>
        </Tableheader>
      <TableDiv>
        {adminRegister.map((register, index) => {
          return (
            <div key={register.id}>
              <ListRow register={register} index={index}/>
            </div>
          );
        })}
      </TableDiv>
    </Wrapper>
  );
}

export default Dashboard;
