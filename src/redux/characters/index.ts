import { asyncThunkCreator, buildCreateSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICharacter, Status } from '../../types';
import marvelService from '../../services/marvel';

interface InitialState {
  charList: ICharacter[];
  page: number;
  status: Status;
  error: string | null;
  isLoadingMore: boolean;
  canLoadMore: boolean;
}

const initialState: InitialState = {
  charList: [],
  page: 1,
  status: Status.IDLE,
  error: null,
  isLoadingMore: false,
  canLoadMore: false,
};

const { getAllCharacters } = marvelService;

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const slice = createSlice({
  name: 'characters',
  initialState,
  reducers: create => ({
    setPage: create.reducer((state, action: PayloadAction<number>) => {
      state.page = action.payload;
    }),
    fetchCharacters: create.asyncThunk(
      async (page: number, thunkApi) => {
        try {
          return await getAllCharacters(page);
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
          state.charList = [...state.charList, ...action.payload.items];
          state.canLoadMore = action.payload.canLoadMore;
          state.status = Status.RESOLVED;
        },
      }
    ),
    fetchMoreCharacters: create.asyncThunk(
      async (page: number, thunkApi) => {
        try {
          return await getAllCharacters(page);
        } catch (error) {
          return thunkApi.rejectWithValue(error);
        }
      },
      {
        pending: state => {
          state.isLoadingMore = true;
        },
        rejected: (state, { payload }) => {
          if (typeof payload === 'string') {
            state.error = payload;
          }
          state.status = Status.REJECTED;
        },
        fulfilled: (state, action) => {
          state.charList = [...state.charList, ...action.payload.items];
          state.canLoadMore = action.payload.canLoadMore;
        },
        settled: state => {
          state.isLoadingMore = false;
        },
      }
    ),
  }),
  selectors: {
    selectCharacters: state => state,
  },
});

export const { fetchCharacters, fetchMoreCharacters, setPage } = slice.actions;
export const { selectCharacters } = slice.selectors;

export default slice.reducer;
