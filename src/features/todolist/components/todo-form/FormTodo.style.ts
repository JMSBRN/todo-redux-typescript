import styled from "styled-components";
interface IForm{
  isEdit: boolean;
}
export const Form = styled.div`
  width: 415px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid grey;
`
export const Inputform = styled.input<IForm>`

`
export const FormBtn = styled.button`

`
