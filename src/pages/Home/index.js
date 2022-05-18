import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Maps from '../../components/Maps';
import { Container } from './style';
import api from '../../services/api';

export default function Home() {
  const [arearisco, setAreaRisco] = useState([]);

  useEffect(() => {
    async function loadDados() {
      const response = await api.get('api/v1/arearisco');
      setAreaRisco(response.data);
    }
    loadDados();
  }, [1]);

  setInterval(() => {
    window.location.reload(true);
  }, 10000);

  return (
    <Container theme="escuro">
      <Header />
      <Maps arearisco={arearisco} />
    </Container>
  );
}
