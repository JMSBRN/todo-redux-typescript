import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { selectTodo, setStatus } from '../../todoSlice';
import Todo from '../todo/Todo';
import * as Styled from './Todos.style';

const Todos = () => {
 const { todos } = useAppSelector(selectTodo);
 const dispatch = useAppDispatch();
  return (
    <Styled.Todos>
      {
        todos.map((el, idx) => 
         <div key={idx}>
           <Todo onClick={() => dispatch(setStatus(true))} todo={{
              id: el.id,
              text: el.text,
              status: el.status
            }} />
         </div>
        )
      }
    </Styled.Todos>
  )
}

export default Todos;