import styled from "styled-components";
import { device } from "../../../utils/mediaUtils";

export const Todos = styled.div`
  position: absolute;
  width: 400px;
  height: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  list-style: none;
  @media ${device.desktopL} {
    width: 30%;
    left: 20px;
    top: 600px;
  }
  @media ${device.desktopXL} {
    width: 30%;
    left: 185px;
    top: 1200px;
  }
`;
