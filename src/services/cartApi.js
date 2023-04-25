import axios from "axios";

const cartApi = axios.create({
  baseURL: "http://localhost:3001",
});

export const cartApiEndPoint = "/cart";

// Functions used to interact with the cart on our backend. We can either fetch the items or add them to the cart.

export const getCartItems = async () => {
  try {
  const response = await cartApi.get(cartApiEndPoint);
  return response.data;
  }catch(err) {
    console.error(err);
    if(err.code === "ERR_NETWORK") throw new Error("An error occured while fetching your cart")

  }
};

export const addCartItem = async (item) => {
  try {
  const response = await cartApi.post(cartApiEndPoint, item);
  return response.data;
}catch(err) {
  console.error(err);
  if(err.code === "ERR_NETWORK" || err.code === "ERR_BAD_REQUEST") throw new Error("An error occured while trying to add an item to your cart")

}
};

export const deleteCartItem = async (id) => {
  try {
  const response = await cartApi.delete(cartApiEndPoint + "/" + id);
  return response.data;
  }catch(err) {
    console.error(err);
    if(err.code === "ERR_NETWORK" || err.code === "ERR_BAD_REQUEST") throw new Error("An error occured while trying to remove an item to your cart")
  }
};
