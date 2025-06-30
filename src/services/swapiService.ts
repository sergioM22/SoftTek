import axios from 'axios';
import https from 'https';


export const getCharacters = async () => {
  const response = await axios.get('https://swapi.py4e.com/api/people/');
  return response.data.results;
};
