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
const mockTodos = [
    {id: '1', text: 'test-1', status: false},
    {id: '2', text: 'test-2', status: false},
    {id: '3', text: 'test-3', status: false},
];
const initialState: IStateTodo = {
    todos: mockTodos,
    todo: {} as ITodo,
    task: '',
    status: false,
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      addTodo: (state, action) => {
       state.todos = action.payload;
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