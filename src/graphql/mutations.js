import gql from "graphql-tag";

export const CREATEREGISTER = gql`
  mutation CreateRegister($timeRegistered: String!) {
    createRegister(timeRegistered: $timeRegistered) {
      id
      userId
      timeRegistered
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      name
      email
      role
      token
    }
  }
`;