import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Conteudo } from './styles';

export default function Notificacao({ isNotificacao, setIsNotificacao }) {
  function constroiData() {
    const dia = new Date().toLocaleString();

    return dia.substring(0, 10);
  }
  const date = constroiData();
  const notificacoes = useSelector(
    state => state.notification.notifications
  ).filter(notifi => notifi.notification.isRead === date);

  return (
    <Container>
      {notificacoes.length > 0 ? (
        <Conteudo>
          <h1 style={{ textAlign: 'center' }}>Notificacoes do Dia {date}</h1>
          <table>
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Cidade</th>
                <th>Regiao</th>
                <th>Descricao</th>
              </tr>
            </thead>

            <tbody>
              {notificacoes.map((notifi, index) => (
                <tr key={index}>
                  <td>
                    <span>{notifi.notification.usuarioId}</span>
                  </td>
                  <td>
                    <span>{notifi.notification.cidade}</span>
                  </td>
                  <td>
                    <span>{notifi.notification.regiao}</span>
                  </td>
                  <td>
                    <span>{notifi.notification.descricao}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            onClick={() => setIsNotificacao(!isNotificacao)}
          >
            fechar
          </button>
        </Conteudo>
      ) : (
        <Container>
          <Conteudo>
            <h1 style={{ textAlign: 'center' }}>
              Nao ha notificações hoje {date}
            </h1>
          </Conteudo>
        </Container>
      )}
    </Container>
  );
}
