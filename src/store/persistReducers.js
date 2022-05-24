/* armazenando dados no storage do browser do usuario */

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'vanilaStore',
      storage,
      whitelist: ['auth', 'user', 'notification'],
    },
    reducers
  );

  return persistedReducer;
};
