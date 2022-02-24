// @ts-nocheck
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';

import rootSaga from '../sagas/index.tsx';

import rootReducer from '../reducers/index.tsx';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga);

  return store;
};

const store = configureStore();
export { store};

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch