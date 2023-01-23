// https://api.binance.com/api/v3/exchangeInfo
import axios from "axios";
const $axios = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});

$axios.interceptors.response.use(
  (response) => {
    if (response.status >= 200 && response.status <= 210) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  async (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("userData");
      location.reload();
      return await axios.request(error.config);
    }
    return await Promise.reject(error.response.data);
  }
);

export default $axios;
