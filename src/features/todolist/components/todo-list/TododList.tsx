import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  selectWether,
  setNewWetherCity,
} from "../../../api-weather/apiWeatherSlice";
import Weather from "../../../api-weather/Weather";
import Clock from "../../../time/Clock";
import FormTodo from "../todo-form/FormTodo";
import Todos from "../todos/Todos";
import * as Styled from "./TodoList.style";

const TododList = () => {
  const { weatherCities } = useAppSelector(selectWether);
  const dispatch = useAppDispatch();
  return (
    <Styled.TodoList>
      <Styled.WeatherCityes>
        <button onClick={() => dispatch(setNewWetherCity())}>
          add sity (max four)
        </button>
        {weatherCities.map((el) => (
          <div key={el.id + el.city}>
            <Weather />
          </div>
        ))}
      </Styled.WeatherCityes>
      <Styled.ToListWrapper>
        <Clock />
        <FormTodo />
        <Todos />
      </Styled.ToListWrapper>
    </Styled.TodoList>
  );
};

export default TododList;
