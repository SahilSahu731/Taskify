import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './taskSlice';

export const store = configureStore({
  reducer: {
    // Add your reducers here
    tasks: taskReducer, // Example reducer
  },
});