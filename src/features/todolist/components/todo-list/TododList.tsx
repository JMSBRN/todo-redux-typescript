import { useAppSelector } from "../../../../app/hooks";
import { selectWether } from "../../../api-weather/apiWeatherSlice";
import Weather from "../../../api-weather/Weather";
import Clock from "../../../time/Clock";
import FormTodo from "../todo-form/FormTodo";
import Todos from "../todos/Todos";
import * as Styled from "./TodoList.style";

const TododList = () => {
  const { isLoaded } = useAppSelector(selectWether)
  return (
    <Styled.TodoList>
      { isLoaded &&  <Weather /> }
      <Styled.ToListWrapper>
        <Clock />
        <FormTodo />
        <Todos />
      </Styled.ToListWrapper>
    </Styled.TodoList>
  );
};

export default TododList;
