import { useAppDispatch } from '../../../../app/hooks'
import { addTodo, setTask } from '../../todoSlice'
import FormTodo from '../todo-form/FormTodo'
import Todos from '../todos/Todos'
import * as  Styled from './TodoList.style'

const TododList = () => {
  const dispatch = useAppDispatch();
  return (
    <Styled.TodoList>
        <FormTodo onChange={(e) => dispatch(setTask(e.target.value)) } onClick={() => dispatch(addTodo) }/>
        <Todos/>
    </Styled.TodoList>
  )
}

export default TododList