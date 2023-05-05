import axios from "axios";
import { getNewAccessToken } from "./token";

export const cartApiEndPoint = "user/cart";

// Functions used to interact with the cart on our backend. We can either fetch the items or add them to the cart.

export const getCartItems = async (params) => {
  if(params[1]) {
    try {
      await getNewAccessToken();
  
      const response = await axios.get(import.meta.env.VITE_API_URL + params[0], {
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      if (err.code === "ERR_NETWORK")
        throw new Error("An error occured while fetching your cart");
      if (err.code === "ERR_BAD_RESPONSE")
        throw new Error("An error occured while fetching your cart");
      if (err.response.status === 401)
        throw new Error(
          "Not authorized to add to the cart. Verify you're connected."
      );
    }
  }
  
};

export const addCartItem = async (item) => {
  try {
    await getNewAccessToken();
    const response = await axios.post(
      import.meta.env.VITE_API_URL + "api/secure/cart/add",
      item,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    if (err.code === "ERR_NETWORK" || err.code === "ERR_BAD_REQUEST")
      throw new Error(
        "An error occured while trying to add an item to your cart"
      );
  }
};

export const deleteCartItem = async (id, size) => {
  try {
    const data = {
      product: id,
      size: size,
    };

    await getNewAccessToken();

    const response = await axios.post(
      import.meta.env.VITE_API_URL + "api/secure/cart/delete",
      data,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    if (err.code === "ERR_NETWORK" || err.code === "ERR_BAD_REQUEST")
      throw new Error(
        "An error occured while trying to remove an item to your cart"
      );
  }
};
