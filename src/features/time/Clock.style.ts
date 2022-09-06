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
export const GreetingNameWrapper = styled.div`
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
export const InputCityByDefault = styled.input`
  color: var(--text-color);
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--border-color);
  font-size: 20px;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 12px;
    color: var(--text-color);
  }
  :focus {
   outline: none ;
  }
`;
export const HoverMessage = styled.div`
  color: transparent;
  font-size: 12px;
  &:hover {
    color: var(--text-color);
    transition-delay: 0.3s;
    transition: 0.3s ease all;
  }
`;
export const TimeWrapper = styled.div`
  width: 200px;
  height: 100px ;
`;
export const Time = styled.div`
  width: 200px;
  height:  60px;
  padding: 10px ;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 65px;
  letter-spacing: 5px ;
  color: var(--text-color);
`;
export const Seconds = styled.span`
  font-size: 30px;
  color: rgba(250, 250, 250, 0.7);
`;

export const Date = styled.div`
  color: var(--text-color);
  font-weight: 400;
  font-size: 20px;
`;
