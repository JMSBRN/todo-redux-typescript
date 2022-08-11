import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ITodo {
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
}
const initialState: IStateTodo = {
    todos: [],
    todo: {} as ITodo,
    task: '',
    status: false,
    id: '',
};
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      addTodo: (state) => {
        if (state.task) {
            const id =  JSON.stringify(Math.floor(Math.random() * 100))
            const todo = {id: id, text: state.task, complited: state.status};
            state.todos = [...state.todos, todo ];
            state.task = '';
        }
      },
      removeTodo: (state, action) => {
       state.todos = action.payload;
      },
      getId: (state, action) => {
       state.id = action.payload;
       state.todos.forEach((el) =>{
        if (el.id === state.id) {
          switch(el.complited) {
            case false: ;
            el.complited = true;
            return;
            case true: ;
            el.complited = false;
            return;
            default:
            return false;
          }
        }
        return el;
       });
      },
      setTask: (state, action) => {
       state.task = action.payload;
      },
       setStatus: (state, action) => {
       state.status = action.payload;
      }
    },
})
export const { addTodo, setTask, getId } = todoSlice.actions;
export const selectTodo = (state:RootState ) => state.todo;
export default todoSlice.reducer;