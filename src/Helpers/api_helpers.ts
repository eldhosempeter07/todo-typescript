import axios from "axios";
// import {
//   onRequest,
//   onResponse,
//   onResponseError,
// } from "./interceptors";

const API_URL = "https://62a33ebd21232ff9b21c3088.mockapi.io/api/v1";
const axiosApi = axios.create({
  baseURL: API_URL,
});

export async function get(url:string, data?:object) {
  return await axiosApi
    .get(url, data )
    .then((response) => response.data);
}

export async function add(url:string, data:object, config = {}) {
  return await axiosApi
    .post(url, data, { ...config })
    .then((response) => response.data);
}

export async function update(url:string, data:object, config = {}) {
  return await axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url:string, data?:object) {
  return await axiosApi
    .delete(url,  { ...data } )
    .then((response) => response.data);
}
