import styled from "styled-components";

export const Calendar = styled.div`
  & .fc-button.fc-today-button,
  .fc-button.fc-prev-button,
  .fc-button.fc-next-button {
    background: transparent;
    color: var(--text-color);
    border: 1px solid var(--border-color);
    &:active {
      background-color: transparent;
    }
    &:focus {
      visibility: hidden;
      transition-delay: 0.1s;
    }
  }
  margin-top: 20px;
  width: 300px;
  height: 300px;
  font-size: 10px;
  color: var(--text-color);
`;
