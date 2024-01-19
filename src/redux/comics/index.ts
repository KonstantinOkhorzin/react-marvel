import { asyncThunkCreator, buildCreateSlice, PayloadAction } from '@reduxjs/toolkit';

import { IComic, Status } from '../../types';
import MarvelService from '../../services/marvel';

interface InitialState {
  comicList: IComic[];
  page: number;
  status: Status;
  error: string | null;
  canLoadMore: boolean;
}

const initialState: InitialState = {
  comicList: [],
  page: 1,
  status: Status.IDLE,
  error: null,
  canLoadMore: false,
};

const { getAllComics } = new MarvelService();

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const slice = createSlice({
  name: 'comics',
  initialState,
  reducers: create => ({
    setPage: create.reducer((state, action: PayloadAction<number>) => {
      state.page = action.payload;
    }),
    fetchComics: create.asyncThunk(
      async (page: number, thunkApi) => {
        try {
          return await getAllComics(page);
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
          state.comicList = [...state.comicList, ...action.payload.items];
          state.canLoadMore = action.payload.canLoadMore;
          state.status = Status.RESOLVED;
        },
      }
    ),
    fetchMoreComics: create.asyncThunk(
      async (page: number, thunkApi) => {
        try {
          return await getAllComics(page);
        } catch (error) {
          return thunkApi.rejectWithValue(error);
        }
      },
      {
        rejected: (state, { payload }) => {
          if (typeof payload === 'string') {
            state.error = payload;
          }
          state.status = Status.REJECTED;
        },
        fulfilled: (state, action) => {
          state.comicList = [...state.comicList, ...action.payload.items];
          state.canLoadMore = action.payload.canLoadMore;
        },
      }
    ),
  }),
  selectors: {
    selectComics: state => state,
  },
});

export const { fetchComics, fetchMoreComics, setPage } = slice.actions;
export const { selectComics } = slice.selectors;

export default slice.reducer;
