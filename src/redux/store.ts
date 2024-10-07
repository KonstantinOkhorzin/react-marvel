import { configureStore } from '@reduxjs/toolkit';

import comicsApi from './comics/api';
import comicsSlice from './comics/slice';
import charactersApi from './characters/api';

const store = configureStore({
  reducer: {
    [comicsApi.reducerPath]: comicsApi.reducer,
    [charactersApi.reducerPath]: charactersApi.reducer,
    comics: comicsSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(comicsApi.middleware, charactersApi.middleware),
});

export type AppDispatch = typeof store.dispatch;

export default store;
