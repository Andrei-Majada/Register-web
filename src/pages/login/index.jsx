import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

import { LOGIN } from '../../graphql/mutations';
import InputField from '../../components/inputField';
import Button from '../../components/button';
import useAuth from '../../hooks/useAuth';

import GreenDisplay from '../../assets/imgs/Vector.svg'
import LogoImg from '../../assets/imgs/LoginLogo.svg'

import {
  Wrapper,
  DivLogin,
  SubTitle,
  DivInput,
  DivButton,
  Logo,
  GreenDisplayImage,
} from './styled';

const LoginPage = () => {
  const [, setUserInfo] = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login] = useMutation(LOGIN, {
    variables: { email: email, password: password },
    onCompleted: (data) => {
      localStorage.removeItem('userInfo');
      setUserInfo(data);
      if (data?.login?.role === "admin") {
        history.push("/dashboard");
      } else {
        history.push("/meusregistros");
      }
    }
  });

  return(
    <Wrapper>
      <Logo src={LogoImg} />
      <GreenDisplayImage src={GreenDisplay} />
      <DivLogin>
        <SubTitle>Login</SubTitle>
        <DivInput>
          <InputField 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='text'
          />
        </DivInput>
        <SubTitle>Senha</SubTitle>
        <DivInput>
          <InputField 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
          />
        </DivInput>
        <DivButton>
          <Button
            onClick={() => login()}
            variant='primary'
          >
            Login
          </Button>
        </DivButton>
      </DivLogin>
    </Wrapper>
  );
}

export default LoginPage;