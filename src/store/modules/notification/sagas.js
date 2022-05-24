import { takeLatest, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { notificationReceivedSuccess } from './actions';

/* funcao que recebe notificacao */
export function* receivedNotification({ payload }) {
  try {
    console.log(payload);
    yield put(notificationReceivedSuccess(payload));
  } catch (error) {
    toast.error('Erro ao atualizar Perfil');
  }
}

/* exporta a função recebe notificação */
export default all([
  takeLatest('@notification/NOTIFICATION_RECEIVED', receivedNotification),
]);
