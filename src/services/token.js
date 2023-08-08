import Cookies from "js-cookie";
import axios from "axios";

export const getNewAccessToken = async () => {
  try {
    const response = await axios.get(
      import.meta.env.VITE_API_URL + "api/token/refresh",
      {
        withCredentials: true,
        params: {
          refresh_token: Cookies.get("refresh_token"),
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const logout = async (username) => {
  try {
    const response = await axios.post(
      import.meta.env.VITE_API_URL + "api/token/invalidate",
      {
        params: {
          refresh_token: Cookies.get("refresh_token"),
          username: username,
        },
      }
    );
    return response.data;
  } catch (err) { }
};
