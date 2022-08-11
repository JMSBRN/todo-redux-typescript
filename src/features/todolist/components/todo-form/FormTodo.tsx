import React, { ChangeEvent } from 'react'
import { useAppSelector } from '../../../../app/hooks';
import { selectTodo } from '../../todoSlice';
import * as Styled from './FormTodo.style';

interface FormTodoProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}
const FormTodo = ({ onChange, onClick }: FormTodoProps) => {
  const {task } = useAppSelector(selectTodo)
  return (
    <Styled.Form>
        <input onChange={onChange} value={task} type="text" />
        <button onClick={onClick}>submit</button>
    </Styled.Form>
  )
}

export default FormTodo;