import styled from "styled-components";

export const ClockWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Greeting = styled.div`
  font-size: 30px;
  color: var(--text-color);
`;
export const  GreetingNameWrapper = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const GreetingName = styled.span`
  font-size: 30px;
  color: var(--text-color);
  cursor: default;
`;
export const InputGreetingNameWrapper = styled.div`
  font-size: 30px;
`;
export const InputGreetingName = styled.input`
  font-size: 20px;
`;
export const HoverMessage = styled.div`
 color: white;
 font-size: 12px;
  &:hover {
    color: var(--text-color);
    transition-delay: 0.3s;
    transition: 0.3s ease all;
  }
`;
export const Time = styled.div`
  color: var(--text-color);
  font-weight: 600;
  font-size: 50px;
  margin-bottom: 20px;
`;
export const Date = styled.div`
  color: var(--text-color);
  font-weight: 400;
  font-size: 20px;
`;
