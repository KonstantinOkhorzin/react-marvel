import { configureStore } from '@reduxjs/toolkit';

import characterDetails from './characterDetails';
import characters from './characters';
import singleCharacter from './singleCharacter';
import comicsApi from './comics/api';
import comicsSlice from './comics/slice';

const store = configureStore({
  reducer: {
    characterDetails,
    characters,
    singleCharacter,
    [comicsApi.reducerPath]: comicsApi.reducer,
    comicsSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(comicsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;

export default store;
