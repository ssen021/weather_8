import styled from "styled-components";

export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  h1 {
    text-align: center;
  }
`;

export const Inputcity = styled.input`
  font-size: 15px;
  height: 30px;
  width: 180px;
  border-radius: 5px;
  padding: 10px;
`;
export const CityWeather = styled.div`
  border-radius: 10px;
  border: 2px solid black;
  width: 200px;
  text-align: center;
  margin-top: 10px;
`;

export const CityP = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin-left: 15px;
`;

export const TemperatureP = styled.p`
  font-size: 50px;
  margin: 0;
  text-align: center;
  font-weight: bold;
`;

export const WeatherP = styled.p`
  font-size: 16px;
  text-align: right;
  margin-right: 20px;
`;
