import axios from "axios";

const cartApi = axios.create({
  baseURL: "http://localhost:3001",
});

export const cartApiEndPoint = "/cart";

// Functions used to interact with the cart on our backend. We can either fetch the items or add them to the cart.

export const getCartItems = async () => {
  const response = await cartApi.get(cartApiEndPoint);
  return response.data;
};

export const addCartItem = async (item) => {
  const response = await cartApi.post(cartApiEndPoint, item);
  return response.data;
};

export const deleteCartItem = async (id) => {
  const response = await cartApi.delete(cartApiEndPoint + "/" + id);
  return response.data;
};
