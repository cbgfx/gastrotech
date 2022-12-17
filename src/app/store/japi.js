import axios from "axios";
//import config from "../../server/config";

const url =
  process.env.NODE_ENV === "production" ? `/api` : `http://localhost:3000/api`;

const japi = axios.create({
  baseURL: url,
});

japi.interceptors.request.use(
  async (config) => {
    config.headers.Accept = "application/json";

    const token = await localStorage.jwtToken;
    if (token) config.headers.Authorization = token;

    return config;
  },
  (error) => Promise.reject(error)
);

export default japi;
