import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { addTodo, selectTodo, setEditedTsk, setTask } from "../../todoSlice";
import * as Styled from "./FormTodo.style";

const FormTodo = () => {
  const { task, isEdit, id } = useAppSelector(selectTodo);
  const dispatch = useAppDispatch();
  const refInput = React.useRef<HTMLInputElement>(null);
  isEdit && refInput.current?.focus();
  return (
    <Styled.Form>
      <Styled.Inputform
        isEdit={isEdit}
        ref={refInput}
        onChange={(e) => dispatch(setTask(e.target.value))}
        value={task}
        type="text"
        placeholder="new task"
      />

      {isEdit ? (
        <Styled.FormBtn onClick={() => dispatch(setEditedTsk(id))}>
          <Styled.BtnNameWrapper>submit edit</Styled.BtnNameWrapper>
        </Styled.FormBtn>
      ) : (
        <Styled.FormBtn onClick={() => dispatch(addTodo())} >
          <Styled.BtnNameWrapper>submit</Styled.BtnNameWrapper>
        </Styled.FormBtn>
      )}
    </Styled.Form>
  );
};

export default FormTodo;
