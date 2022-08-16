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
    text: string;
    isEdit: boolean;
}
const initialState: IStateTodo = {
    todos: [],
    todo: {} as ITodo,
    task: '',
    status: false,
    id: '',
    text: '',
    isEdit: false,
};
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      setTodos: (state, action) => {
      state.todos = action.payload
      },
      addTodo: (state) => {
        if (state.task) {
            const id =  JSON.stringify(Math.floor(Math.random() * 100))
            const todo = {id: id, text: state.task, complited: state.status};
            state.todos = [...state.todos, todo ];
            state.task = '';
        }
      },
      removeTodo: (state, action) => {
       const arr = state.todos.filter((el) => el.id !== action.payload).map((el) => { return el})
       state.todos = arr;
      },
      setComplited: (state) => {
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
      getId: (state, action) => {
       state.id = action.payload;
      },
      setTask: (state, action) => {
       state.task = action.payload;
      },
       setStatus: (state, action) => {
       state.status = action.payload;
      },
      setEditedTsk: ((state, action) => {
       state.todos.forEach((el) => {
        if (el.id === action.payload) {
          el.text = state.task;
         return el;
        }})
        state.isEdit = false;
        state.task = '';
      }),
      getText: ((state, action) => {
        state.text = action.payload;
        state.task = state.text;
        switch(state.isEdit) {
          case true:
            state.isEdit = false;
            return;
            case false:
            state.isEdit = true;
          return;
        }
        
      }),
    },
})
export const { addTodo, setTask, getId , removeTodo, setTodos, getText, setEditedTsk, setComplited} = todoSlice.actions;
export const selectTodo = (state:RootState ) => state.todo;
export default todoSlice.reducer;