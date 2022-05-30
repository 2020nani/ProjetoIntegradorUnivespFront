import { takeLatest, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { notificationReceivedSuccess, readNotification } from './actions';

/* funcao que recebe notificacao */
export function* receivedNotification({ payload }) {
  try {
    yield put(notificationReceivedSuccess(payload));
    toast.info('Nova notificação de risco');
  } catch (error) {
    toast.error('Erro ao atualizar Perfil');
  }
}

/* funcao mostra nova notificação */
export function* atualizar() {
  yield put(readNotification());
}

/* exporta a função recebe notificação */
export default all([
  takeLatest('@notification/NOTIFICATION_RECEIVED', receivedNotification),
  takeLatest('@notification/NOTIFICATION_NEW', atualizar),
]);
