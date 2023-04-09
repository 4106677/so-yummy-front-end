import axios from 'axios';

class RecipeService {
  constructor({
    baseUrl = 'https://recipes-becend-49lg.onrender.com',
    httpClient = axios,
    tokenKey = 'token'
  } = {}) {
    this.baseUrl = baseUrl;
    this.httpClient = httpClient.create({ baseURL: this.baseUrl });
    this.tokenKey = tokenKey;
  }

  async addRecipe(recipe) {
    const response = await this.httpClient.post(
      '/postrecipes/ownRecipes/addRecipe',
      { body: recipe },
      {
        headers: { Authorization: `Bearer ${this.getToken()}` }
      }
    );
    return response;
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

  getToken() {
    try {
      this.token = localStorage.getItem(this.tokenKey) ?? '';
    } catch (err) {
      return err;
    }
  }
}

export const recipeService = new RecipeService({});
