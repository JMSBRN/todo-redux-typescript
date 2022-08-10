import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface ITodo {
    id: string;
    text: string;
    status: boolean;
}
export interface IStateTodo {
    todos: ITodo[];
    todo: ITodo;
    task: string;
    status: boolean;
}
const initialState: IStateTodo = {
    todos: [],
    todo: {} as ITodo,
    task: '',
    status: false,
};
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      addTodo: (state) => {
       const id =  JSON.stringify(Math.floor(Math.random() * 100))
       const task = {id: id, text: state.task, status: state.status};
       state.todos = [...state.todos, task ]
       console.log(state.todos);
       
      },
      removeTodo: (state, action) => {
       state.todos = action.payload;
      },
      setTask: (state, action) => {
       state.task = action.payload;
      },
       setStatus: (state, action) => {
       state.status = action.payload;
      }
    },
})
export const { addTodo, setTask, setStatus } = todoSlice.actions;
export const selectTodo = (state:RootState ) => state.todo;
export default todoSlice.reducer;