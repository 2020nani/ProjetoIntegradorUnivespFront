import React from 'react';
import { useSelector } from 'react-redux';

export default function Notificacao({ isNotificacao, setIsNotificacao }) {
  const notificacoes = useSelector(state => state.notification.notifications);

  return (
    console.log(notificacoes),
    (
      <div
        style={{
          backgroundColor: '#0E0A14ef',
          width: '40%',
          height: '100%',
          top: '0',
          position: 'absolute',
          display: 'flex',
          alignSelf: 'flex-end',
          justifyContent: 'center',
          alignItems: 'center',
          transition: '600ms',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '30px 50px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <table>
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Cidade</th>
                <th>Regiao</th>
              </tr>
            </thead>

            <tbody>
              {notificacoes.map(notifi => (
                <tr>
                  <td>
                    <span>{notifi.notification.usuarioId}</span>
                  </td>
                  <td>
                    <span>{notifi.notification.cidade}</span>
                  </td>
                  <td>
                    <span>{notifi.notification.regiao}</span>
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
        </div>
      </div>
    )
  );
}
