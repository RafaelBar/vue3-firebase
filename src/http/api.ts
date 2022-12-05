import axios, { type AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "http://212.80.207.16:5000/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
