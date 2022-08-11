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
        todos.map((el, idx) => 
         <div key={idx}>
           <Todo id={el.id} text={el.text} complited={el.complited}  />
         </div>
        )
      }
    </Styled.Todos>
  )
}

export default Todos;