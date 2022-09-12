import styled from "styled-components";
import { device, deviceFontSize } from "../../../utils/mediaUtils";

interface IForm {
  isEdit: boolean;
}
export const Form = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin:0;
  padding:0;
  margin-bottom: 30px;
  @media ${device.mobileM} {
    font-size: ${deviceFontSize.mobileM};
  }
  @media ${device.tablet} {
    font-size: ${deviceFontSize.tablet};
  }
  @media ${device.desktop} {
    font-size: ${deviceFontSize.desktop};
  }
  @media ${device.laptop} {
    font-size: ${deviceFontSize.laptop};
  }
  @media ${device.laptopL} {
    font-size: ${deviceFontSize.laptopL};
  }
  @media ${device.desktopL} {
    font-size: ${deviceFontSize.desktopL};
  }
  @media ${device.desktopXL} {
    font-size: ${deviceFontSize.desktopXL};
  }
`;
export const Inputform = styled.input<IForm>`
  width: 78%;
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
  width: 20%;
  height: auto;
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
