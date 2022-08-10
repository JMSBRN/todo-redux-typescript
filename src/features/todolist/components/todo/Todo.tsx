import React from 'react'
import * as Styled from './Todo.style';

export interface ITodo {
 todo: { id: string;
   text: string;
   status: boolean;
  }
}
const Todo = ({ todo }: ITodo) => {
  const { id, text, status } = todo;
  return (
    <Styled.Todo>
      <div className="id">{id}</div>
      <div className="text">{text}</div>
      <div className="id">{status}</div>
    </Styled.Todo>
  )
}

export default Todo;