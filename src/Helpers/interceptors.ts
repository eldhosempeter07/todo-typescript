import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export function onRequest(config:AxiosRequestConfig) {
    console.info(`request [${JSON.stringify(config)}]`);
  
}

export function onRequestError(error:AxiosError):Promise<AxiosError> {
  // Do something with request error
  return Promise.reject(error);
}

// Add a response interceptor
export function onResponse(response:AxiosResponse) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}

export function onResponseError(error:AxiosError) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  const status = Number(
    error.response ? error.response.headers.status || error.response.status : -1
  );
  return Promise.reject(
    error?.response?.data ||
      "Something went wrong! Please try again after some time"
  );
}
