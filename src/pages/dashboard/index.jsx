import React, { useState } from 'react';
import { useQuery } from "@apollo/react-hooks";

import ListRow from '../../components/listRow';
import { LISTADMIN } from  '../../graphql/queries';

import {
  Wrapper,
  TableDiv,
  Tableheader,
  TableColumn,
} from './styled';

const Dashboard = () => {
  const [adminRegister, setAdminRgiester] = useState([]);
  function getToken() {
    let login = localStorage.getItem('userInfo');
    let temp = JSON.parse(login)
    return `Bearer ` + temp?.login?.token;
  }

  const { loading, error } = useQuery(LISTADMIN, {
    context: {
      headers: {
        Authorization:  getToken(),
      }
    },
    onCompleted: (data) => {
      setAdminRgiester(data?.listAdminRegister);
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
