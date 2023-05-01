import Cookies from "js-cookie";
import axios from "axios";

export const getRefreshToken = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + 'api/token/refresh', {
        withCredentials: true,
        params: {
            refresh_token: Cookies.get("refresh_token")
        }
      });
      console.log(response);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };