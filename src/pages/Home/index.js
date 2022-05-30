import React, { useEffect, useState } from 'react';
import SockJsClient from 'react-stomp';
import Header from '../../components/Header';
import Maps from '../../components/Maps';
import { Container } from './style';
import api from '../../services/api';
import Notificacao from '../../components/Notificacao';

export default function Home() {
  const SOCKET_URL = process.env.REACT_APP_SOCKET_URL;
  const [arearisco, setAreaRisco] = useState([]);
  const [isNotificacao, setIsNotificacao] = useState(false);

  useEffect(() => {
    async function loadDados() {
      const response = await api.get('api/v1/arearisco');
      setAreaRisco(response.data);
    }
    loadDados();
  }, [1]);

  return (
    <Container>
      <Header
        isNotificacao={isNotificacao}
        setIsNotificacao={setIsNotificacao}
      />
      <Maps arearisco={arearisco} />
      {isNotificacao && (
        <Notificacao
          isNotificacao={isNotificacao}
          setIsNotificacao={setIsNotificacao}
        />
      )}
      <SockJsClient
        url={SOCKET_URL}
        topics={['/topic/area']}
        onConnect={console.log('CONNECTED!')}
        onMessage={msg => setAreaRisco(msg)}
        debug={false}
      />
    </Container>
  );
}
