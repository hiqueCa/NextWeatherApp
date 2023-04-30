const BASE_URL = 'http://api.weatherapi.com/v1';
const API_KEY = '2cb60e756cd74412815110306232504';

const parseQueryString = (location: string) => `?key=${API_KEY}&q=${location}`;

export const fetchCurrentWeather = async (location: string): Promise<any> => {
  const API_METHOD = '/current.json';
  const response = await fetch(BASE_URL + API_METHOD + parseQueryString(location));
  const responseJson = await response.json();

  return responseJson;
};