
import FormTodo from '../todo-form/FormTodo'
import Todos from '../todos/Todos'
import * as  Styled from './TodoList.style'

const TododList = () => {
  return (
    <Styled.TodoList>
        <FormTodo />
        <Todos/>
    </Styled.TodoList>
  )
}

export default TododList