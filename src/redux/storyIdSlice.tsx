import {createSlice} from '@reduxjs/toolkit';

const storyIdSlice = createSlice({
  name: 'storyId',
  initialState: {
    value:"1",
  },
  reducers: {
    setStoryId: (state, action) => {
      state.value = action.payload
    },
  },
});

export const {setStoryId} = storyIdSlice.actions;
export default storyIdSlice.reducer;