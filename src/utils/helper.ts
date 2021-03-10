import { AxiosError } from 'axios';
import * as Yup from 'yup';

import IHttpClientError from 'services/httpClient/responses/default/IHttpClientError';

export interface IValidationErrors {
  [key: string]: string;
}

function _httpClientError(err: AxiosError<IHttpClientError>): void {
  const statusHttpCode = err.response?.status;

  if (statusHttpCode === 400) {
    const message = err.response?.data.error.message;

    // addToast({
    //   title: message || 'Falha para realizar ação',
    //   type: 'error',
    //   duration: 3000,
    // });
    return;
  }

  if (statusHttpCode === 500) {
    // addToast({
    //   title: 'Servidor indisponível no momento',
    //   type: 'error',
    // });
  }

  // addToast({
  //   title: err.message,
  //   type: 'error',
  // });
}

function _appError(message: string): void {
  // addToast({
  //   title: message,
  //   type: 'error',
  // });
}

function errorHandling(err: AxiosError): void {
  if (err.isAxiosError) {
    _httpClientError(err);
    return;
  }

  _appError(err.message);
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

export default { errorHandling, generateUniqueId, getValidationErrors };
