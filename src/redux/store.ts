import { configureStore } from '@reduxjs/toolkit';

import characterDetails from './characterDetails';
import characters from './characters';
import comics from './comics';
import singleCharacter from './singleCharacter';
import singleComic from './singleComic';

const store = configureStore({
  reducer: { characterDetails, characters, comics, singleCharacter, singleComic },
});

export type AppDispatch = typeof store.dispatch;

export default store;
