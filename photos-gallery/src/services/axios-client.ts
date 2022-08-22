import router from "@/router";
import axios, { type AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

instance.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("access_token");

    config.headers = {
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (err) => Promise.reject(err)
);

instance.interceptors.response.use(
  (response) => response,
  async (err) => {
    if (err.response.status === 403) {
      try {
        const retryRes = await refreshTokenAndRetry(err.config);
        return retryRes;
      } catch (error) {
        router.replace({ path: "/login" });
      }
    }
  }
);

async function refreshTokenAndRetry(config: AxiosRequestConfig) {
  const refreshToken = window.localStorage.getItem("refresh_token");
  const formData = new FormData();
  formData.append("refresh_token", refreshToken as string);
  formData.append("client_id", import.meta.env.VITE_APP_IMGUR_CLIENT_ID);
  formData.append("secret_id", import.meta.env.VITE_APP_IMGUR_SECRET_ID);
  formData.append("grant_type", "refresh_token");
  const { data } = await instance.post("/token", formData);
  Object.entries(data).forEach(([key, value]) =>
    window.localStorage.setItem(key, value as string)
  );

  const { method, url, data: requestData, headers, params } = config;
  const res = await instance({
    url,
    data: requestData,
    method,
    headers,
    params,
  });
  return res;
}

export function post(
  url: string,
  data: Record<string, unknown> | FormData,
  opt = {}
) {
  return instance.post(url, data, opt);
}

export function get(url: string, opt = {}) {
  return instance.get(url, opt);
}

export function remove(url: string, opt = {}) {
  return instance.delete(url, opt);
}

export default instance;
