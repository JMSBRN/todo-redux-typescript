import React from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { addTodo, selectTodo, setEditedTsk, setTask } from "../../todoSlice";
import * as Styled from "./FormTodo.style";

const FormTodo = () => {
  const { t} = useTranslation();
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
        placeholder={t("FormTodo.inputPlaceholder")}
      />

      {isEdit ? (
        <Styled.FormBtn onClick={() => dispatch(setEditedTsk(id))}>
          <Styled.BtnNameWrapper>{t("FormTodo.textEditBtn")}</Styled.BtnNameWrapper>
        </Styled.FormBtn>
      ) : (
        <Styled.FormBtn onClick={() => dispatch(addTodo())} >
          <Styled.BtnNameWrapper>{t("FormTodo.textBtn")}</Styled.BtnNameWrapper>
        </Styled.FormBtn>
      )}
    </Styled.Form>
  );
};

export default FormTodo;
