import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, ContainerGrid, ContainerGridConteudo } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
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
          <div>Notificações</div>
        </ContainerGridConteudo>
      </ContainerGrid>
    </Container>
  );
}
