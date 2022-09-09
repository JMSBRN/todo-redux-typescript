import styled from "styled-components";
import { device, deviceSmallFontSize } from "../../../utils/mediaUtils";

interface IForm {
  isEdit: boolean;
}
export const Form = styled.div`
  position: absolute;
  @media ${device.desktopL} {
    left: 100px;
    top: 500px;
  }
  @media ${device.desktopXL} {
    width: 30%;
    left: 200px;
    top: 1000px;
  }
`;
export const Inputform = styled.input<IForm>`
  width: 68%;
  padding: 3px 0;
  font-size: 16px;
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
      font-size: ${deviceSmallFontSize.desktopL};
    }
  }
  :-ms-input-placeholder {
    color: var(--text-color);
    @media ${device.desktopL} {
      font-size: ${deviceSmallFontSize.desktopL};
    }
    @media ${device.desktopXL} {
      font-size: ${deviceSmallFontSize.desktopXL};
    }
  }
  @media ${device.desktopL} {
    font-size: ${deviceSmallFontSize.desktopL};
  }
  @media ${device.desktopXL} {
    font-size: ${deviceSmallFontSize.desktopXL};
  }
`;
export const FormBtn = styled.button`
  width: 30%;
  padding: 3px;
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
    font-size: ${deviceSmallFontSize.desktopL};
  }
  @media ${device.desktopXL} {
    font-size: ${deviceSmallFontSize.desktopXL};
  }
`;
