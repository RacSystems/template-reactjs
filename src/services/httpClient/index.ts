import axios from 'axios';

import interceptors from './interceptors';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

interceptors.logout(httpClient);

function setAuthorization(token: string): void {
  httpClient.defaults.headers.Authorization = `Bearer ${token}`;
}

export { setAuthorization };
export default httpClient;
