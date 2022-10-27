import axios from "axios";

export function getAPIClient(ctx) {
  const token = localStorage.getItem("ftcToken")

  const api = axios.create({
    baseURL: process.env.REACT_APP_QRCODE_URL
  })

  api.interceptors.request.use(config => {
    console.log(config);

    return config;
  })

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}