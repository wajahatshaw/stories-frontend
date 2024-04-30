import {createSlice} from '@reduxjs/toolkit';

const storySlice = createSlice({
  name: 'story',
  initialState: {
    value: '',
  },
  reducers: {
    setStory: (state, action) => {
      state.value = action.payload
    },
  },
});
export const {setStory} = storySlice.actions;
export default storySlice.reducer;