import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: number;
  task: string;
  isDone: boolean;
}

export interface TaskState {
  task: string;
  taskList: Task[];
}

const initialState: TaskState = {
  task: "",
  taskList: []
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTask: (state, action: PayloadAction<string>) => {
      state.task = action.payload;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.taskList.push(action.payload);
      state.task = "";
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.taskList.find((task) => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.taskList = state.taskList.filter((task) => task.id !== action.payload);
    },
  },
});

export const { setTask, addTask, toggleTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;