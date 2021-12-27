import { gql } from 'graphql-tag';

export const hello = gql`
  query {
    hello
  }
`;

export const LISTADMIN = gql`
  query ListAdminRegister {
    listAdminRegister {
      id
      userId
      username
      timeRegistered
    }
  }
`;

export const LISTEMPLOYEE = gql`
  query ListEmployeeRegister {
    listEmployeeRegister {
      id
      userId
      username
      timeRegistered
    }
  }
`;