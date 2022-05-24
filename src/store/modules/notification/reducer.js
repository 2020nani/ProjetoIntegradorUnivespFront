import produce from 'immer';

const INITIAL_STATE = {
  notifications: [],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@notification/NOTIFICATION_SUCCESS': {
        draft.notifications.push(action.payload.notification);
        break;
      }

      default:
    }
  });
}
