import { AxiosInstance } from 'axios';

import { callRedirect } from '../Redirect';

function logout(httpClient: AxiosInstance): void {
  httpClient.interceptors.response.use(
    success => {
      return success;
    },
    error => {
      if (error.response) {
        const { status } = error.response;

        if (status === 401) {
          callRedirect();
        }

        return Promise.reject(error);
      }

      return Promise.reject(error);
    },
  );
}

export default logout;
