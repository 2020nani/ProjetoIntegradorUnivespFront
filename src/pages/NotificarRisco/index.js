import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import SockJsClient from 'react-stomp';
import { Container, Conteudo } from './style';
import Header from '../../components/Header';
import { notificationReceived } from '../../store/modules/notification/actions';
import api from '../../services/api';
import Notificacao from '../../components/Notificacao';

const schema = Yup.object().shape({
  cidade: Yup.string().required('A cidade e obrigatório'),
  regiao: Yup.string().required('A regiao é obrigatória'),
  descricao: Yup.string()
    .required('A descricao do risco é obrigatória')
    .min(10, 'No minimo 10 caracteres')
    .max(500, 'No maximo 500 caracteres'),
});

export default function NotificarRisco() {
  const SOCKET_URL = process.env.REACT_APP_SOCKET_URL;
  const [isNotificacao, setIsNotificacao] = useState(false);
  const dispatch = useDispatch();
  const regioes = [
    'REGIAO_SUL',
    'REGIAO_NORTE',
    'REGIAO_OESTE',
    'REGIAO_LESTE',
  ];
  function constroiData() {
    const dia = new Date().toLocaleString();

    return dia.substring(0, 10);
  }
  const date = constroiData();

  return (
    <>
      <Header
        isNotificacao={isNotificacao}
        setIsNotificacao={setIsNotificacao}
      />
      <Container>
        <Conteudo>
          <h1>Notificar Risco</h1>
          <Formik
            initialValues={{
              cidade: '',
              regiao: '',
              descricao: '',
            }}
            validationSchema={schema}
            /* funcao loga usuario */
            onSubmit={(values, { resetForm }) => {
              const { cidade, regiao, descricao } = values;
              api
                .post('notificacao', {
                  cidade: cidade,
                  regiao: regiao,
                  descricao: descricao,
                  usuarioId: 1,
                  isRead: date,
                })
                .then(resp => {
                  console.log(resp);
                  resetForm();
                })
                .catch(err => {
                  console.error(err);
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

                <Field as="select" name="regiao">
                  <option value="">
                    Escolha a regiao ao qual pertence a cidade
                  </option>
                  {regioes.map(regi => (
                    <option key={regi} value={regi}>
                      {regi}
                    </option>
                  ))}
                </Field>
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
        </Conteudo>
        {isNotificacao && (
          <Notificacao
            isNotificacao={isNotificacao}
            setIsNotificacao={setIsNotificacao}
          />
        )}
        <SockJsClient
          url={SOCKET_URL}
          topics={['/topic/message']}
          onConnect={console.log('CONNECTED!')}
          onMessage={msg => dispatch(notificationReceived(msg))}
          headers={{
            Accept: 'application/json',
            ContentType: 'application/json',
          }}
          debug={false}
        />
      </Container>
    </>
  );
}
