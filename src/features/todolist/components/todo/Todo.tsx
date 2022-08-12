import React from 'react'
import { useAppDispatch } from '../../../../app/hooks';
import { getId, ITodo, removeTodo } from '../../todoSlice';
import * as Styled from './Todo.style';


const Todo = ( todo : ITodo) => {
  const {id, text, complited } = todo;
  const dispatch = useAppDispatch();

  return (
    <><Styled.Todo complited={complited} id={id} onClick={(e) => dispatch(getId(e.currentTarget.id))}>
      <div className="text">{text}</div>
    </Styled.Todo>
    <button onClick={() => dispatch(removeTodo(id))}>delete</button>
    </>
  )
}

export default Todo;