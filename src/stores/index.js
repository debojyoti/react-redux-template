// This file will contain the root store, which will be used to create the Redux store.

import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user-slice';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, userSlice);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
})