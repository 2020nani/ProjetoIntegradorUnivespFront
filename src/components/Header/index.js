import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, ContainerGrid, ContainerGridConteudo } from './styles';

export default function Header({ isNotificacao, setIsNotificacao }) {
  const profile = useSelector(state => state.user.profile);
  const notificacoes = useSelector(state => state.notification.notifications);
  const count = notificacoes.filter(
    notifi => notifi.notification.read === false
  );

  return (
    <Container>
      <ContainerGrid>
        <ContainerGridConteudo size={1} align="flex-start">
          <div>
            <strong>logo</strong>
          </div>
        </ContainerGridConteudo>
        <ContainerGridConteudo size={3} align="space-around">
          <div>
            <Link to="notificar">Enviar Notificação Risco </Link>
          </div>
          <div>
            <strong>{profile.nome} </strong>
          </div>
          <div>
            <strong> | </strong>
          </div>
          <div>
            <Link to="profile"> Perfil</Link>
          </div>
          {!isNotificacao && (
            <div onClick={() => setIsNotificacao(!isNotificacao)}>
              Notificações <span>{count.length}</span>
            </div>
          )}
        </ContainerGridConteudo>
      </ContainerGrid>
    </Container>
  );
}
