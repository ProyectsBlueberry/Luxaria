// store.ts
import { configureStore } from '@reduxjs/toolkit';
import myReducer from './reducer';

// Configura el store
const store = configureStore({
  reducer: {
    mySlice: myReducer
  }
});

// Define los tipos RootState y AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
