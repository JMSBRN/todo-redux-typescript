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
import trashImg from './assets/trash.png';
import editImg from './assets/pencil.png';

const Todo = (todo: ITodo) => {
  const { time, id, text, complited } = todo;
  const dispatch = useAppDispatch();
  const handlGetTextAndId = () => {
    dispatch(getText(text));
    dispatch(getId(id));
  };
  const handlSetCompletedTask = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(getId(e.currentTarget.id));
    dispatch(setComplited());
  };
  return (
    <Styled.TodoWrapper>
      <Styled.TimeTodo>{time}</Styled.TimeTodo>
      <Styled.Todo
        complited={complited}
        id={id}
        onClick={(e) => handlSetCompletedTask(e)}
      >
        <Styled.TodoText >
          {text}
        </Styled.TodoText>
      </Styled.Todo>

      <Styled.BtnsWrapper>
        <Styled.TodoBtn onClick={() => dispatch(removeTodo(id))}>
        <Styled.TrashImg src={trashImg} alt="trash to delete todo" />
        </Styled.TodoBtn>
        <Styled.TodoBtn onClick={handlGetTextAndId}>
        <Styled.EditImg src={editImg} alt="pencil to edit todo" />
        </Styled.TodoBtn>
 </Styled.BtnsWrapper>
    </Styled.TodoWrapper>
  );
};

export default Todo;
