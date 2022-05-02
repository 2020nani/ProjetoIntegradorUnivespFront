import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Container, Conteudo } from './styles';
import { signUpRequest } from '../../store/modules/auth/actions';
import logo from '../../assets/imagens/logo.jpg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(8, 'No mínimo 8 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Conteudo>
        <div>
          <Link to="/">
            <img src={logo} width="300px" alt="devaria" />
          </Link>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            validationSchema={schema}
            onSubmit={async values => {
              const { name, email, password } = values;
              dispatch(signUpRequest(name, email, password));
            }}
          >
            {({ touched, errors }) => (
              <Form>
                <Field name="name" placeholder="Digite seu nome" />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}

                <Field name="email" placeholder="Digite seu email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}

                <Field name="password" placeholder="Digite sua senha" />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <button type="submit">Cadastrar</button>
              </Form>
            )}
          </Formik>
          <span>Já tem uma conta?</span>
          <Link to="/login">
            <span style={{ color: 'orange' }}>Faça Login!</span>
          </Link>
        </div>
      </Conteudo>
    </Container>
  );
}
