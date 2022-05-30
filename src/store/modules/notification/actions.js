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

export function isNewReadNotification() {
  return {
    type: '@notification/NOTIFICATION_NEW',
  };
}

export function readNotification() {
  return {
    type: '@notification/NOTIFICATION_READ_SUCCESS',
  };
}
