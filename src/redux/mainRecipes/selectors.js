export const getContentForMain = state => state.outerRecipes.mainCategories;
export const getIsError = state => state.outerRecipes.isError;
export const getFullCategoryList = state => state.outerRecipes.categoryList;
export const getLimitedRecipes = state =>
  state.outerRecipes.limitedRecipesByCategory;
export const getAllRecipes = state => state.outerRecipes.recipesOfCategory;
export const getSingleRecipe = state => state.outerRecipes.singleRecipe;
export const getPopular = state => state.outerRecipes.popularRecipes;
export const getRecipesBySearchQuery = state =>
  state.outerRecipes.recipesByQuery;
export const getIsCategoryFetching = state =>
  state.outerRecipes.isCategoryFetching;

export const isLoadingRecipesOfCategory = state =>
  state.recipes.loadingRecipesOfCategory;
