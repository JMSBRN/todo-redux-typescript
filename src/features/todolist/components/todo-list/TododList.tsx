import Weather from "../../../api-weather/Weather";
import Clock from "../../../time/Clock";
import FormTodo from "../todo-form/FormTodo";
import Todos from "../todos/Todos";
import * as Styled from "./TodoList.style";

const TododList = () => {
  return (
    <Styled.TodoList>
      <Weather />
      <Styled.ToListWrapper>
        <Clock />
        <FormTodo />
        <Todos />
      </Styled.ToListWrapper>
    </Styled.TodoList>
  );
};

export default TododList;
