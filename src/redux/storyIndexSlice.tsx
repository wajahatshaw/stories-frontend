import {createSlice} from '@reduxjs/toolkit';

const storyIndexSlice = createSlice({
  name: 'storyIndex',
  initialState: {
    value: 0,
  },
  reducers: {
    setStoryIndex: (state, action) => {
      state.value = action.payload
    },
  },
});

export const {setStoryIndex} = storyIndexSlice.actions;
export default storyIndexSlice.reducer;