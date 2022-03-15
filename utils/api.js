export const API_URL = 'http://localhost:3000';
export const api = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});
