import axios from "axios";

const articlesApi = axios.create({
  baseURL: "http://localhost:3001",
});

export const articlesApiEndPoint = "/products";

// Functions used to interact with the articles on our backend, here we're only fetching because the backend take care of the rest

export const getArticles = async () => {
  const response = await articlesApi.get(articlesApiEndPoint);
  return response.data;
};
