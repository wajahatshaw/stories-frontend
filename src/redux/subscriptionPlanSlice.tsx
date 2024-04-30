import { createSlice } from '@reduxjs/toolkit';

interface SubscriptionPlanState {
  value: string;
}

const initialState: SubscriptionPlanState = {
  value: 'weekly',
};

const subscriptionPlanSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    setPlan: (state, action) => {
      state.value = action.payload;
    },
  },
});


export const { setPlan } = subscriptionPlanSlice.actions;
export default subscriptionPlanSlice.reducer;
