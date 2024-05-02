import {createSlice} from '@reduxjs/toolkit';

const prevStorySlice = createSlice({
  name: 'prevStory',
  initialState: {
    value: "",
  },
  reducers: {
    setPrevStory: (state, action) => {
      state.value = action.payload
    },
  },
});
export const {setPrevStory} = prevStorySlice.actions;
export default prevStorySlice.reducer;