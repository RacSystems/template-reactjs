import { AxiosError } from 'axios';
import * as Yup from 'yup';

import ToastManager from 'components/Toast/ToastManager';

import IHttpClientError from 'services/httpClient/responses/default/IHttpClientError';

export interface IValidationErrors {
  [key: string]: string;
}

function _httpClientError(err: AxiosError<IHttpClientError>): void {
  const statusHttpCode = err.response?.status;

  if (statusHttpCode === 400) {
    const message = err.response?.data.error.message;

    ToastManager.show({
      title: message || 'Falha para realizar ação',
      type: 'error',
    });
    return;
  }

  if (statusHttpCode === 500) {
    ToastManager.show({
      title: 'Servidor indisponível no momento',
      type: 'error',
    });
    return;
  }

  ToastManager.show({
    title: err.message,
    type: 'error',
  });
}

function _appError(message: string): void {
  ToastManager.show({
    title: message,
    type: 'error',
  });
}

function errorHandling(err: AxiosError): void {
  if (err.isAxiosError) {
    _httpClientError(err);
    return;
  }

  _appError(err.message);
}

function featureDev(): void {
  ToastManager.show({
    type: 'info',
    title: 'Em desenvolvimento',
    description: 'Esta seção está em desenvolvimento!',
  });
}

function generateUniqueId(): number {
  const uniqueId = Date.now();

  return uniqueId;
}

function getValidationErrors(err: Yup.ValidationError): IValidationErrors {
  const validationErrors: IValidationErrors = {};
  err.inner.forEach(error => {
    validationErrors[String(error.path)] = error.message;
  });

  return validationErrors;
}

export default {
  errorHandling,
  featureDev,
  generateUniqueId,
  getValidationErrors,
};
