import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const arrFromLocal = JSON.parse(localStorage.getItem("todos")!) || [];

export interface ITodo {
  time: string;
  id: string;
  text: string;
  complited: boolean;
}
export interface IStateTodo {
  todos: ITodo[];
  todo: ITodo;
  task: string;
  status: boolean;
  id: string;
  text: string;
  isEdit: boolean;
}
const initialState: IStateTodo = {
  todos: arrFromLocal,
  todo: {} as ITodo,
  task: "",
  status: false,
  id: "",
  text: "",
  isEdit: false,
};
const setTodosToLocal = (state: ITodo[]) => {
  localStorage.setItem("todos", JSON.stringify(state || []));
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
      setTodosToLocal(state.todos);
    },
    addTodo: (state) => {
      if (state.task) {
        const id = JSON.stringify(Math.floor(Math.random() * 100));
        const time = new Date().toLocaleString();
        const todo = {
          time: time,
          id: id,
          text: state.task,
          complited: state.status,
        };
        state.todos = [...state.todos, todo];
        state.task = "";
        setTodosToLocal(state.todos);
      }
    },
    removeTodo: (state, action) => {
      const arr = state.todos
        .filter((el) => el.id !== action.payload)
        .map((el) => {
          return el;
        });
      state.todos = arr;
      setTodosToLocal(state.todos);
    },
    setComplited: (state) => {
      state.todos.forEach((el) => {
        if (el.id === state.id) {
          switch (el.complited) {
            case false:
              el.complited = true;
              return;
            case true:
              el.complited = false;
              return;
            default:
              return false;
          }
        }
        return el;
      });
      setTodosToLocal(state.todos);
    },
    getId: (state, action) => {
      state.id = action.payload;
    },
    setTask: (state, action) => {
      state.task = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setEditedTsk: (state, action) => {
      state.todos.forEach((el) => {
        if (el.id === action.payload) {
          el.text = state.task;
          return el;
        }
      });
      setTodosToLocal(state.todos);
      state.isEdit = false;
      state.task = "";
    },
    getText: (state, action) => {
      state.text = action.payload;
      state.task = state.text;
      switch (state.isEdit) {
        case true:
          state.isEdit = false;
          return;
        case false:
          state.isEdit = true;
          return;
      }
    },
  },
});
export const {
  addTodo,
  setTask,
  getId,
  removeTodo,
  setTodos,
  getText,
  setEditedTsk,
  setComplited,
} = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todo;
export default todoSlice.reducer;
