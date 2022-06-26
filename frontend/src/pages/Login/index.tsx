import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useContextApp } from '../../Context';
import {
  Form, H1, ContainerAuth, Button, Input, InputContainer, Konv, Header,
} from '../../global/styles/globals';
import api from '../../services';

const Login = () => {
  const [password, setPaword] = useState('f208hf2-30f8puasd');
  const [cpf, setCpf] = useState('33275922632');
  const { user, setUser } = useContextApp();
  const navigate = useNavigate();
  function LoginUser(e: any) {
    e.preventDefault();

    if (!password) {
      alert('Informe seu nome');
    }
    if (!cpf) {
      alert('Informe seu cpf');
    }

    api.get(`/account/login/${password}/${cpf}`)
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.data.returnUser));
        setUser(res.data.returnUser);
      })
      .catch((err) => {
        // console.log(err.response.data);
      });
  }

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user]);

  return (
    <ContainerAuth>
      <Form>
        <Header>
          <Konv>Konv</Konv>
          <H1>Login account bank</H1>
        </Header>
        <InputContainer>
          <Input placeholder='Cpf: '
             value={cpf}
             onChange={(e) => setCpf(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Input placeholder='Password: '
            type="password"
            value={password}
            onChange={(e) => setPaword(e.target.value)}
          />
        </InputContainer>
        <Button onClick={(e) => LoginUser(e)}>Login</Button>
      </Form>
    </ContainerAuth>
  );
};

export default Login;
