import styled from "styled-components";
import { device } from "../../../utils/mediaUtils";

interface IForm {
  isEdit: boolean;
}
export const Form = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin:0;
  padding:0;
  font-size: 5vw;
  margin-bottom: 30px;
  @media ${device.mobileExtraS},${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 17vw;
  }
`;
export const Inputform = styled.input<IForm>`
  width: 98%;
  font-size: 0.7em;
  text-align: center;
  padding-bottom: 7px;
  font-size: .3em;
  color: var(--text-color);
  outline: none;
  background-color: transparent;
  border: 1px solid var(--border-color);
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 1.1em;
    color: var(--text-color);
  }
  :-ms-input-placeholder {
    color: var(--text-color);
    font-size: 1.1em;
  }
`;
export const FormBtn = styled.button`
  width: 35%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  font-size: .3em;
  color: var(--text-color);
  border: 1px solid var(--border-color);
  background-color: transparent;
  cursor: pointer;
  &:active {
    border: 1px solid var(--border-color-grey);
  }
`;
export const BtnNameWrapper = styled.div`
  padding-bottom: 4%;
`;
