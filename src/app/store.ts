import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import mandalaReducer from '../views/mandala/mandalaSlice';

export const store = configureStore({
  reducer: {
    mandala: mandalaReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
