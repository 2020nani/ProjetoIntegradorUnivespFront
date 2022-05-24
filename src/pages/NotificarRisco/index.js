import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Container } from './style';
import Header from '../../components/Header';
import { notificationReceived } from '../../store/modules/notification/actions';
import api from '../../services/api';
import SockJsClient from 'react-stomp';

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL;

const schema = Yup.object().shape({
  cidade: Yup.string().required('A cidade e obrigatório'),
  regiao: Yup.string().required('A regiao é obrigatória'),
  descricao: Yup.string()
    .required('A descricao do risco é obrigatória')
    .min(10, 'No minimo 10 caracteres')
    .max(500, 'No maximo 500 caracteres'),
});

export default function Dashboard() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Header />
      <div>
        <Formik
          initialValues={{
            cidade: '',
            regiao: '',
            descricao: '',
          }}
          validationSchema={schema}
          /* funcao loga usuario */
          onSubmit={values => {
            const { cidade, regiao, descricao } = values;
            const response = api
              .post('notificacao', {
                cidade: cidade,
                regiao: regiao,
                descricao: descricao,
                usuarioId: 1,
                isRead: false,
              })
              .then(response => {
                console.log(response);
              })
              .catch(err => {
                console.error('ops! ocorreu um erro' + err);
              });
          }}
        >
          {({ touched, errors }) => (
            <Form>
              <Field
                name="cidade"
                placeholder="Digite qual a cidade possui o risco"
              />
              {errors.cidade && touched.cidade ? (
                <div>{errors.cidade}</div>
              ) : null}

              <Field
                name="regiao"
                placeholder="Digite a regiao ao qual pertence a cidade"
              />
              {errors.regiao && touched.regiao ? (
                <div>{errors.regiao}</div>
              ) : null}

              <Field
                component="textarea"
                name="descricao"
                placeholder="Descreva o risco resumidamente"
              />
              {errors.descricao && touched.descricao ? (
                <div>{errors.descricao}</div>
              ) : null}

              <button type="submit">Enviar Notificação</button>

              <Link to="/">Retornar pagina inicial</Link>
            </Form>
          )}
        </Formik>
      </div>
      <SockJsClient
        url={SOCKET_URL}
        topics={['/topic/message']}
        onConnect={console.log('CONNECTED!')}
        onMessage={msg => dispatch(notificationReceived(msg))}
        headers={{
          Accept: 'application/json',
          ContentType: 'application/json',
          AccessControlAllowHeaders: 'XMLHttpRequest',
        }}
        debug={false}
      />
    </Container>
  );
}
