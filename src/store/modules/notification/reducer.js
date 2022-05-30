import produce from 'immer';

const INITIAL_STATE = {
  notifications: [],
  newNotificacao: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@notification/NOTIFICATION_SUCCESS': {
        draft.notifications.push(action.payload.notification);
        draft.newNotificacao = true;
        break;
      }
      case '@notification/NOTIFICATION_READ_SUCCESS': {
        draft.newNotificacao = false;
        break;
      }
      default:
    }
  });
}
