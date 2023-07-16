import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import mandalaReducer from '../views/mandala/mandalaSlice';
import messageReducer from '../features/message/messageSlice';

// Middleware to add the property "async dispatch" to actions
const asyncDispatchMiddleware = (store: any) => (next: any) => (action: any) => {
  let syncActivityFinished = false
  let actionQueue: any[] = []
  function flushQueue() {
    actionQueue.forEach((a) => store.dispatch(a)) // flush queue
    actionQueue = []
  }
  function asyncDispatch(asyncAction: any) {
    actionQueue = actionQueue.concat([asyncAction])
    if (syncActivityFinished) {
      flushQueue()
    }
  }
  const actionWithAsyncDispatch = Object.assign({}, action, { asyncDispatch })
  const res = next(actionWithAsyncDispatch)
  syncActivityFinished = true
  flushQueue()
  return res
}

const reducer = {
  mandala: mandalaReducer,
  message: messageReducer,
}

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(asyncDispatchMiddleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
