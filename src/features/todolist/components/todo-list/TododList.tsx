import WeatherCities from "../../../api-weather/assets/weather/WeatherCities";
import Clock from "../../../time/Clock";
import FormTodo from "../todo-form/FormTodo";
import Todos from "../todos/Todos";
import * as Styled from "./TodoList.style";

const TododList = () => {
  return (
    <Styled.TodoList>
      <WeatherCities />
      <Styled.ToListWrapper>
        <Clock />
        <FormTodo />
        <Todos />
      </Styled.ToListWrapper>
    </Styled.TodoList>
  );
};

export default TododList;
