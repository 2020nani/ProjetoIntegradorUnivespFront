export function notificationReceived(notification) {
  return {
    type: '@notification/NOTIFICATION_RECEIVED',
    payload: { notification },
  };
}

export function notificationReceivedSuccess(notification) {
  return {
    type: '@notification/NOTIFICATION_SUCCESS',
    payload: { notification },
  };
}
