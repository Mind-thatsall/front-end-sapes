import axios from "axios";

const articlesApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const articlesApiEndPoint = "api/products";

// Functions used to interact with the articles on our backend

export const getArticles = async (gender, categorieName, searchTerm) => {
  // Fetching articles based on gender && category if any, search if any or all of them

  if (gender && categorieName) {
    const data = await getArticlesFromCategory(gender, categorieName);
    return data.products;
  } else if (searchTerm) {
    const data = await getArticlesFromSearch(searchTerm);
    return data;
  } else {
    const data = await getAllArticles();
    return data;
  }
};

export const getArticlesFromCategory = async (gender, id) => {
  try {
    const response = await articlesApi.get(
      `api/${gender}/categories/${id}/products`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.code === "ERR_NETWORK")
      throw new Error("An error occured while getting articles");
  }
};

export const getAllArticles = async () => {
  try {
    const response = await articlesApi.get(articlesApiEndPoint);
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.code === "ERR_NETWORK")
      throw new Error("An error occured while getting articles");
  }
};

export const getArticlesFromSearch = async (searchTerm) => {
  try {
    const search = {
      name: searchTerm.replace("%20", " "),
    };

    const response = await articlesApi.post("api/search", search);

    return response.data;
  } catch (error) {
    console.error(error);
    if (error.code === "ERR_NETWORK")
      throw new Error("An error occured while getting articles");
  }
};

export const getCategories = async () => {
  try {
    const response = await articlesApi.get(`api/categories`);
    return response.data;
  } catch (error) {
    console.error(error);
    if (err.code === "ERR_NETWORK")
      throw new Error("An error occured while getting articles");
  }
};

export const getArticle = async (id) => {
  try {
    const response = await articlesApi.get(`api/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    if (err.code === "ERR_NETWORK")
      throw new Error("An error occured while getting the article");
  }
};
