import styled from "styled-components";
import { device, deviceSmallFontSize } from '../../../utils/mediaUtils';

interface IForm {
  isEdit: boolean;
}
export const Form = styled.div`
  width: 20%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media ${device.desktopL} {
    position: absolute;
    left: 1.3%;
    top: 500px;
  }
`;
export const Inputform = styled.input<IForm>`
  width: 80%;
  padding: 3px 0;
  font-size: ${deviceSmallFontSize};
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
  width: auto;
  padding: 5px;
  font-size: 20px;
  color: var(--text-color);
  border: 1px solid var(--border-color);
  background-color: transparent;
  cursor: pointer;
  &:active {
    border: 1px solid var(--border-color-grey);
  }
  @media ${device.desktopL} {
   font-size: ${deviceSmallFontSize};
  }
`;
