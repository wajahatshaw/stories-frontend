import {createSlice} from '@reduxjs/toolkit';

const nextStorySlice = createSlice({
  name: 'nextStory',
  initialState: {
    value: '',
  },
  reducers: {
    setNextStory: (state, action) => {
      state.value = action.payload
    },
  },
});
export const {setNextStory} = nextStorySlice.actions;
export default nextStorySlice.reducer;