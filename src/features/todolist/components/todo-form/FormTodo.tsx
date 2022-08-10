import React, { ChangeEvent } from 'react'
import * as Styled from './FormTodo.style';

interface FormTodoProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}
const FormTodo = ({ onChange, onClick }: FormTodoProps) => {
  return (
    <Styled.Form>
        <input onChange={onChange} type="text" />
        <button onClick={onClick}>submit</button>
    </Styled.Form>
  )
}

export default FormTodo;