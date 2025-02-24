// import { configureStore, createSlice } from '@reduxjs/toolkit';

// const studentSlice = createSlice({
//   name: 'students',
//   initialState: [],
//   reducers: {
//     addStudent: (state, action) => {
//       state.push(action.payload);
//     }
//   }
// });

// export const { addStudent } = studentSlice.actions;

// const store = configureStore({
//   reducer: {
//     students: studentSlice.reducer
//   }
// });

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './studentSlice'; // Import reducer

const store = configureStore({
  reducer: {
    students: studentReducer
  }
});

export default store;
