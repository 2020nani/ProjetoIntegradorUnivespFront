import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Container, Conteudo } from './styles';
import { signInRequest } from '../../store/modules/auth/actions';
import logo from '../../assets/imagens/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  senha: Yup.string()
    .required('A senha é obrigatória')
    .min(8, 'No mínimo 8 caracteres'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  return (
    <Container>
      <Conteudo>
        <Link to="/">
          <img src={logo} width="60%" alt="logo" />
        </Link>
        <div>
          <Formik
            initialValues={{
              email: '',
              senha: '',
            }}
            validationSchema={schema}
            /* funcao loga usuario */
            onSubmit={async values => {
              const { email, senha } = values;

              dispatch(signInRequest(email, senha));
            }}
          >
            {({ touched, errors }) => (
              <Form>
                <Field name="email" placeholder="Digite seu email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}

                <Field
                  type="password"
                  name="senha"
                  placeholder="Digite sua senha"
                />
                {errors.senha && touched.senha ? (
                  <div>{errors.senha}</div>
                ) : null}

                <button type="submit">
                  {loading ? 'Carregando..' : 'Entrar'}
                </button>

                <Link to="/cadastro">Criar conta gratuita</Link>
              </Form>
            )}
          </Formik>
        </div>
      </Conteudo>
    </Container>
  );
}
