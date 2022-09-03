import styled from "styled-components";
export const WeatherCityes = styled.div`
  width: 300px;
  height: 700px;
  margin-top: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  list-style: none;
`;
export const AddCityBtnWrapper = styled.div`
  height: 30px;
`;
export const AddCityBtn = styled.button`
  margin-bottom: 20px;
  width: 235px;
  font-size: 16px;
  color: var(--text-color);
  background-color: transparent;
  border: 1px solid var(--border-color);
  cursor: pointer;
  &:hover {
    padding: 7px;
    transition: all ease 0.3s;
  }
`;
export const NoCityMessage = styled.div`
  width: 200px ;
  padding: 3px ;
  font-size: 14px;
  color: var(--text-color);
`;

