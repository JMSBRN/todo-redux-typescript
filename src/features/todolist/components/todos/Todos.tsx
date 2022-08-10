import React from 'react'
import { useAppSelector } from '../../../../app/hooks';
import { selectTodo } from '../../todoSlice';
import Todo from '../todo/Todo';
import * as Styled from './Todos.style';

const Todos = () => {
 const { todos } = useAppSelector(selectTodo);
  return (
    <Styled.Todos>
      {
        todos.map((el) => 
         <div key={el.id}>
           <Todo todo={{
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