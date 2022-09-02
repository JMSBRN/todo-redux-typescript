import styled from "styled-components";
interface IForm {
  isEdit: boolean;
}
export const Form = styled.div`
  width: 415px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Inputform = styled.input<IForm>`
  width: 350px;
  height: 30px;
  font-size: 20px;
  text-align: center;
  padding-bottom: 7px;
  color: var(--text-color);
  outline: none;
  background-color: transparent;
  border: 1px solid var(--border-color);
  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--text-color);
  }
  :-ms-input-placeholder {
    color: var(--text-color);
  }
`;
export const FormBtn = styled.button`
  width: 90px;
  min-height: 34px;
  font-size: 16px;
  border: 1px solid var(--border-color);
  background-color: transparent;
  color: var(--text-color);
`;
