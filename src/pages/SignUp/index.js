import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { singnUpRequest } from '~/store/modules/auth/actions';

// import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  name: Yup.string().required('O nome é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handlerSubmit({ name, email, password }) {
    dispatch(singnUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handlerSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu Email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta "
        />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho Login</Link>
      </Form>
    </>
  );
}
