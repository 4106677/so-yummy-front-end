import axios from 'axios';
import { getToken } from './getToken';

class RecipeService {
  constructor({
    baseUrl = 'https://recipes-becend-49lg.onrender.com',
    httpClient = axios,
    tokenKey = 'token',
    getToken
  } = {}) {
    this.baseUrl = baseUrl;
    this.httpClient = httpClient.create({ baseURL: this.baseUrl });
    this.tokenKey = tokenKey;
    this.getToken = getToken;
  }

  async addRecipe(recipe) {
    const response = await this.httpClient.post('/recipes/ownRecipes/addRecipe', recipe, {
      headers: { Authorization: this.getToken() }
    });
    return response.status;
  }

  async getIngredients({ transform } = {}) {
    const { data } = await this.httpClient.get('/ingredients/list');

    if (transform) return transform(data);

    return data;
  }

  async getPopular() {
    const { data } = await this.httpClient.get('/recipes/popular-recipes');

    return data;
  }

  async getCategories() {
    const { data } = await this.httpClient.get('/recipes/category-list');

    return data;
  }
}

export const recipeService = new RecipeService({ getToken });
