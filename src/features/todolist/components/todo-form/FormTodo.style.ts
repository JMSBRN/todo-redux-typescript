import styled from "styled-components";
import { device, deviceFontSize } from "../../../utils/mediaUtils";

interface IForm {
  isEdit: boolean;
}
export const Form = styled.div`
  position: absolute;
  @media ${device.desktopL} {
    width: 39%;
    left: 50px;
    top: 550px;
    font-size: ${deviceFontSize.desktopL};
  }
  @media ${device.desktopXL} {
    width: 33.5%;
    left: 200px;
    top: 1000px;
    font-size: ${deviceFontSize.desktopXL};
  }
`;
export const Inputform = styled.input<IForm>`
  width: 68%;
  font-size: 0.7em;
  text-align: center;
  padding-bottom: 7px;
  color: var(--text-color);
  outline: none;
  background-color: transparent;
  border: 1px solid var(--border-color);
  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--text-color);
    @media ${device.desktopL} {
      font-size: 1.1em;
    }
    @media ${device.desktopXL} {
      font-size: 1.1em;
    }
  }
  :-ms-input-placeholder {
    color: var(--text-color);
    @media ${device.desktopL} {
      font-size: 1.1em;
    }
    @media ${device.desktopXL} {
      font-size: 0.1em;
    }
  }
  @media ${device.desktopL} {
    font-size: .3em;
  }
  @media ${device.desktopXL} {
    font-size: 0.25em;
  }
`;
export const FormBtn = styled.button`
  width: 20%;
  height: auto;
  margin-left: 20px;
  font-size: 20px;
  color: var(--text-color);
  border: 1px solid var(--border-color);
  background-color: transparent;
  cursor: pointer;
  &:active {
    border: 1px solid var(--border-color-grey);
  }
  @media ${device.desktopL} {
    font-size: .3em;
  }
  @media ${device.desktopXL} {
    font-size: 0.25em;
  }
`;
