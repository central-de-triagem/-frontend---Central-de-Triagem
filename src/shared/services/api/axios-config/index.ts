import axios from "axios";
import { Environment } from "../../../environment";
import { errorInterceptor, responseInterceptor } from "./interceptors";

export const Api = axios.create({
  baseURL: Environment.URL_BASE,
});

Api.interceptors.response.use(
  response => responseInterceptor(response),
  error => errorInterceptor(error),
);