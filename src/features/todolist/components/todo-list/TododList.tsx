import WeatherCities from "../../../api-weather/assets/weather/WeatherCities";
import Calendar from "../../../calendar/Calendar";
import Clock from "../../../time/Clock";
import FormTodo from "../todo-form/FormTodo";
import Todos from "../todos/Todos";
import * as Styled from "./TodoList.style";

const TododList = () => {
  return (
    <Styled.TodoListLayout>
      <Styled.TodoList>
        <WeatherCities />
        <Calendar />
        <Styled.ToDoListWrapper>
          <Clock />
          <FormTodo />
          <Todos />
        </Styled.ToDoListWrapper>
      </Styled.TodoList>
    </Styled.TodoListLayout>
  );
};

export default TododList;
