import { configureStore } from "@reduxjs/toolkit";
import storyReducer from './storySlice'
import storyIndexReducer from './storyIndexSlice'
import nextStoryReducer from './nextStorySlice'
import storyIdReducer from './storyIdSlice'
import subscriptionPlanReducer from "./subscriptionPlanSlice";
import searchReducer from './search'
import { setupListeners } from "@reduxjs/toolkit/query/react";

export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
    reducer:{
        story: storyReducer,
        storyIndex: storyIndexReducer, 
        storyId: storyIdReducer, 
        nextStory: nextStoryReducer,
        subscriptionPlan: subscriptionPlanReducer,
        search: searchReducer,
    }
});

setupListeners(store.dispatch)
