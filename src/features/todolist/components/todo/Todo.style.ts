import styled from "styled-components";
import { device, deviceFontSize } from "../../../utils/mediaUtils";
interface ITodo {
  complited: boolean;
}
export const TodoWrapper = styled.div`
  position: relative;
  margin-bottom: .15em;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  @media ${device.mobileM} {
    font-size: ${deviceFontSize.mobileM};
  }
  @media ${device.tablet} {
    font-size: ${deviceFontSize.tablet};
  }
  @media ${device.laptopL} {
    font-size: ${deviceFontSize.laptopL};
  }
  @media ${device.desktop} {
    font-size: ${deviceFontSize.desktop};
  }
  @media ${device.desktopL} {
    font-size: ${deviceFontSize.desktopL};
  }
  @media ${device.desktopXL} {
    font-size: ${deviceFontSize.desktopXL};
  }
`;
export const TimeTodo = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  font-size: 0.1em;
  color: var(--text-color);
  @media ${device.desktopL} {
    font-size: 0.13em;
  }
  @media ${device.desktopXL} {
    font-size: 0.11em;
  }
`;
export const Todo = styled.div<ITodo>`
  padding: .13em;
  text-decoration: ${({ complited }) => (complited ? "line-through red" : "")};
  @media ${device.desktopL} {
    width: 80%;
    padding: 0.2em;
  }
  @media ${device.desktopXL} {
    width: 80%;
    padding: 0.2em;
  }
`;
export const TodoText = styled.div`
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  font-size: 0.3em;
  color: var(--text-color);
  line-height: auto; /* fallback */
  max-height: auto; /* fallback */
  -webkit-line-clamp: 10; /* number of lines to show */
  -webkit-box-orient: vertical;
  @media ${device.desktopXL} {
    font-size: 5rem;
  }
`;
export const BtnsWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media ${device.desktopXL} {
    width: 1.1em;
  }
`;
export const TodoBtn = styled.button`
  width: 1.8em;
  height: 1.8em; 
  background-color: transparent;
  background-position: center;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  &:active {
    border: 1px solid var(--border-color);
    border-radius: 50%;
  }
  @media ${device.laptopL} {
    width: 1.8em;
    height: 1.8em;
  }
  @media ${device.desktopL} {
    width: 0.1em;
    height: 0.1em;
  }
  @media ${device.desktopXL} {
    width: 5.5em;
    height: 5.5em;
  }
`;
export const TrashImg = styled.img`
  width: 1em;
  filter: invert(100%) sepia(100%) saturate(13%) hue-rotate(253deg)
    brightness(102%) contrast(100%);
    @media ${device.tablet} {
      width: .5em;
  }
    @media ${device.laptop} {
    width: 1em;
  }
    @media ${device.laptopL} {
    width: 1em;
  }
    @media ${device.desktopL} {
    width: 1.5em;
  }
  @media ${device.desktopXL} {
    width: 3.5em;
  }
`;
export const EditImg = styled.img`
  width: 1em;
  filter: invert(100%) sepia(100%) saturate(13%) hue-rotate(253deg)
    brightness(102%) contrast(100%);
  @media ${device.tablet} {
    width: .5em;
  }
  @media ${device.laptop} {
    width: 1em;
  }
  @media ${device.laptopL} {
    width: 1em;
  }
  @media ${device.desktopL} {
    width: 1.5em;
  }
  @media ${device.desktopXL} {
    width: 3.5em;
  }
`;
