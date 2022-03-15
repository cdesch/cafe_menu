// const instance = axios.create({
//   crossDomain: true,
//   headers: {'authorizationToken': 'cloud2022'}
// });
import axios from 'axios';
const API_URL = "https://fh34mm97a6.execute-api.us-east-1.amazonaws.com/dev";
// export const API_URL = 'http://localhost:3000';
const api = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  crossDomain: true,
  headers: {'authorizationToken': 'cloud2022'}
});

export default api;
