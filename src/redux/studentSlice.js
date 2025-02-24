import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: [],
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    }
  }
});

// Export actions
export const { addStudent } = studentSlice.actions;

// Export reducer
export default studentSlice.reducer;
