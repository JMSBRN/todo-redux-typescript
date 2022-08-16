import { Reorder } from "framer-motion";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { selectTodo, setTodos } from "../../todoSlice";
import Todo from "../todo/Todo";
import * as Styled from "./Todos.style";

const Todos = () => {
  const { todos } = useAppSelector(selectTodo);
  const dispatch = useAppDispatch();

  return (
    <Reorder.Group
      as="div"
      axis="y"
      onReorder={(todos) => {
        dispatch(setTodos(todos));
      }}
      values={todos}
    >
      <Styled.Todos>
        {todos.map((el) => (
          <Reorder.Item
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={el.id}
            value={el}
          >
            <Todo time={el.time} id={el.id} text={el.text} complited={el.complited} />
          </Reorder.Item>
        ))}
      </Styled.Todos>
    </Reorder.Group>
  );
};

export default Todos;
