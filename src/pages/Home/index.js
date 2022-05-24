import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { useSelector } from 'react-redux';
import Maps from '../../components/Maps';
import { Container } from './style';
import api from '../../services/api';
import Notificacao from '../../components/Notificacao';

export default function Home() {
  const [arearisco, setAreaRisco] = useState([]);
  const [isNotificacao, setIsNotificacao] = useState(false);

  useEffect(() => {
    async function loadDados() {
      const response = await api.get('api/v1/arearisco');
      setAreaRisco(response.data);
    }
    loadDados();
  }, [1]);

  /**setInterval(() => {
    window.location.reload(true);
  }, 10000);*/

  return (
    <Container theme="escuro">
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
    </Container>
  );
}
