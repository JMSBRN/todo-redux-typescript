import React from "react";
import { useAppDispatch } from "../../../../app/hooks";
import {
  getId,
  getText,
  ITodo,
  removeTodo,
  setComplited,
} from "../../todoSlice";
import * as Styled from "./Todo.style";

const Todo = (todo: ITodo) => {
  const { id, text, complited } = todo;
  const dispatch = useAppDispatch();
  const handlGetTextAndId = () => {
    dispatch(getText(text));
    dispatch(getId(id));
  };
  return (
    <Styled.TodoWrapper>
      <Styled.Todo
        complited={complited}
        id={id}
        onClick={(e) => dispatch(getId(e.currentTarget.id))}
      >
        <Styled.TodoText onClick={() => dispatch(setComplited())}>
          {text}
        </Styled.TodoText>
      </Styled.Todo>
      <Styled.TodoBtn onClick={() => dispatch(removeTodo(id))}>
        delete
      </Styled.TodoBtn>
      <Styled.TodoBtn onClick={handlGetTextAndId}>edit</Styled.TodoBtn>
    </Styled.TodoWrapper>
  );
};

export default Todo;
