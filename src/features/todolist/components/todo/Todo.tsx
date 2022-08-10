import React from 'react'
import * as Styled from './Todo.style';

export interface ITodo {
 todo: { 
    id: string;
    text: string;
    status: boolean;
  };
  onClick: () => void;
}
const Todo = ({ todo, onClick }: ITodo) => {
  const { text, status } = todo;
  return (
    <Styled.Todo onClick={onClick}>
      <div className="text">{text}</div>
      <div className="status">{status}</div>
    </Styled.Todo>
  )
}

export default Todo;