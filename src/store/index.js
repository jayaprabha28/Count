import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducer/counterSlice'; // Assuming counterReducer is default exported from counterSlice
const store  = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
