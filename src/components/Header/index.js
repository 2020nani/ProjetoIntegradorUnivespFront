import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MdNotifications } from 'react-icons/md';
import { isNewReadNotification } from '../../store/modules/notification/actions';
import logo from '../../assets/imagens/logo.png';
import {
  Container,
  ContainerGrid,
  ContainerGridMenu,
  ContainerGridConteudo,
} from './styles';

export default function Header({ isNotificacao, setIsNotificacao }) {
  const dispatch = useDispatch();
  function constroiData() {
    const dia = new Date().toLocaleString();

    return dia.substring(0, 10);
  }
  const date = constroiData();
  const profile = useSelector(state => state.user.profile);
  const notificacoes = useSelector(state => state.notification.notifications);
  const novaNotificacao = useSelector(
    state => state.notification.newNotificacao
  );
  const count = notificacoes.filter(
    notifi => notifi.notification.isRead === date
  );

  function readNotificacao() {
    setIsNotificacao(!isNotificacao);
    dispatch(isNewReadNotification());
  }

  return (
    <Container>
      <ContainerGrid>
        <ContainerGridConteudo size={1} align="flex-start">
          <div>
            <Link to="home">
              {' '}
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </ContainerGridConteudo>
        <ContainerGridConteudo size={3} align="space-around">
          <div>
            <Link to="notificar">
              {' '}
              <span>Enviar Notificação Risco</span>{' '}
            </Link>
          </div>
          <div>
            <strong>Usuario: {profile.nome} </strong>
          </div>
          <div>
            <Link to="profile"> Perfil</Link>
          </div>
          {!isNotificacao && (
            <div onClick={() => readNotificacao()}>
              <span>
                <MdNotifications
                  size={novaNotificacao === true ? '50' : '30'}
                  color={novaNotificacao === true ? 'green' : 'black'}
                />
              </span>
              <span>{count.length}</span>
            </div>
          )}
        </ContainerGridConteudo>
      </ContainerGrid>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ContainerGridMenu>
          <ContainerGridConteudo size={1} align="flex-start">
            <div>
              <Link to="home">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </ContainerGridConteudo>
          <ContainerGridConteudo size={3} align="space-around">
            <div>
              <strong>Usuario: {profile.nome} </strong>
            </div>
            {!isNotificacao && (
              <div onClick={() => readNotificacao()}>
                <span>
                  <MdNotifications
                    size={novaNotificacao === true ? '50' : '30'}
                    color={novaNotificacao === true ? 'green' : 'black'}
                  />
                </span>
                <span>{count.length}</span>
              </div>
            )}
          </ContainerGridConteudo>
        </ContainerGridMenu>
        <ContainerGridMenu>
          <ContainerGridConteudo size={3} align="flex-start">
            <div>
              <Link to="notificar">
                {' '}
                <span>Enviar Notificação Risco</span>{' '}
              </Link>
            </div>
          </ContainerGridConteudo>
          <ContainerGridConteudo size={1} align="space-around">
            <div>
              <Link to="profile"> Perfil</Link>
            </div>
          </ContainerGridConteudo>
        </ContainerGridMenu>
      </div>
    </Container>
  );
}
