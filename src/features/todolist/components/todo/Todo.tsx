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
  const { time, id, text, complited } = todo;
  const dispatch = useAppDispatch();
  const handlGetTextAndId = () => {
    dispatch(getText(text));
    dispatch(getId(id));
  };
  return (
    <Styled.TodoWrapper>
      <Styled.TimeTodo>{time}</Styled.TimeTodo>
      <Styled.Todo
        complited={complited}
        id={id}
        onClick={(e) => dispatch(getId(e.currentTarget.id))}
      >
        <Styled.TodoText onClick={() => dispatch(setComplited())}>
          {text}
        </Styled.TodoText>
      </Styled.Todo>
      <Styled.BtnsWrapper>
        <Styled.TodoBtn onClick={() => dispatch(removeTodo(id))}>
        🗑️
        </Styled.TodoBtn>
        <Styled.TodoBtn onClick={handlGetTextAndId}>🖊️</Styled.TodoBtn>
      </Styled.BtnsWrapper>
    </Styled.TodoWrapper>
  );
};

export default Todo;
