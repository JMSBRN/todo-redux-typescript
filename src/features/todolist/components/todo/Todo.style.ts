import styled from "styled-components";
import { device } from "../../../utils/mediaUtils";
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
  font-size: 7vw;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  @media ${device.mobileExtraS},  ${device.mobileS},  ${device.mobileM}, ${device.mobileL} {
    font-size: 18vw;
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
  margin-right: .1em ;
`;
export const TodoBtn = styled.button`
  width: 2em;
  height: 2em; 
  background-color: transparent;
  background-position: center;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  &:active {
    border: 1px solid var(--border-color);
    border-radius: 50%;
  }
`;
export const TrashImg = styled.img`
  width: 1em;
  filter: invert(100%) sepia(100%) saturate(13%) hue-rotate(253deg)
    brightness(102%) contrast(100%);
`;
export const EditImg = styled.img`
  width: 1em;
  filter: invert(100%) sepia(100%) saturate(13%) hue-rotate(253deg)
    brightness(102%) contrast(100%);
`;
