import { configureStore } from '@reduxjs/toolkit';

import dataReducer from '../features/data/dataSlice';
import counterReducer from '../features/counter/counterSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      data: dataReducer,
      counter: counterReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];