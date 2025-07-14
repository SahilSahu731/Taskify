import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  taskList: [],
  isLoading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
   addTask : (state, action) => {
    const { title, description, priority, status } = action.payload;

    const newTask = {
        id: nanoid(),
        title,
        description,
        priority,
        status,
        createdAt: new Date().toISOString(),
    };
    // Ensure the task list is initialized
    state.taskList.push(newTask);
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    removeTask: (state, action) => {
      const taskId = action.payload;
      state.taskList = state.taskList.filter(task => task.id !== taskId);
    },

   }
});

export const { addTask, removeTask, setLoading, setError } = taskSlice.actions;

export default taskSlice.reducer;
