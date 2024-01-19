import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';

import { IComic, Status } from '../../types';
import MarvelService from '../../services/marvel';

interface InitialState {
  comic: IComic | null;
  status: Status;
  error: string | null;
}

const initialState: InitialState = {
  comic: null,
  status: Status.IDLE,
  error: null,
};

const { getComicById } = new MarvelService();

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const slice = createSlice({
  name: 'singleComic',
  initialState,
  reducers: create => ({
    fetchComicById: create.asyncThunk(
      async (id: string, thunkApi) => {
        try {
          return await getComicById(id);
        } catch (error) {
          return thunkApi.rejectWithValue(error);
        }
      },
      {
        pending: state => {
          state.status = Status.PENDING;
        },
        rejected: (state, { payload }) => {
          if (typeof payload === 'string') {
            state.error = payload;
          }
          state.status = Status.REJECTED;
        },
        fulfilled: (state, action) => {
          state.comic = action.payload;
          state.status = Status.RESOLVED;
        },
      }
    ),
  }),
  selectors: {
    selectSingleComic: state => state,
  },
});

export const { fetchComicById } = slice.actions;
export const { selectSingleComic } = slice.selectors;

export default slice.reducer;
