import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.OPENWEATHER_API_KEY;

console.log('API KEY:', apiKey); 

export const getWeatherByCity = async (city: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  return response.data;
};
