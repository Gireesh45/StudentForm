import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './studentSlice'; // Import reducer

const store = configureStore({
  reducer: {
    students: studentReducer
  }
});

export default store;
