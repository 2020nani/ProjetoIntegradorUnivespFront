import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import useWebSocket from 'react-use-websocket';
import { Container } from './style';
import Header from '../../components/Header';

const schema = Yup.object().shape({
  cidade: Yup.string().required('A cidade e obrigatório'),
  regiao: Yup.string().required('A regiao é obrigatória'),
  descricao: Yup.string()
    .required('A descricao do risco é obrigatória')
    .min(10, 'No minimo 10 caracteres')
    .max(500, 'No maximo 500 caracteres'),
});

export default function Dashboard() {
  const { lastJsonMessage, sendMessage } = useWebSocket(
    'ws://localhost:8080/ws',
    {
      onOpen: () => console.log(`Connected to App WS`),
      onMessage: () => {
        if (lastJsonMessage) {
          console.log(lastJsonMessage);
        }
      },
      onError: event => {
        console.error(event);
      },
      shouldReconnect: closeEvent => true,
      reconnectInterval: 3000,
    }
  );

  const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);
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
            console.log('erro');
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

              <button type="button" onClick={handleClickSendMessage}>
                Enviar Notificação
              </button>

              <Link to="/">Retornar pagina inicial</Link>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}
